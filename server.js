require("dotenv").config();

const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const { URL } = require("node:url");
const chatHandler = require("./api/chat");

const projectRoot = __dirname;
const port = Number(process.env.PORT) || 3000;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(payload));
}

function handleChat(request, response) {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
  });
  request.on("end", () => {
    try {
      request.body = body ? JSON.parse(body) : {};
    } catch (error) {
      request.body = {};
    }

    chatHandler(request, {
      status(statusCode) {
        return {
          json(payload) {
            sendJson(response, statusCode, payload);
          },
        };
      },
    }).catch(() => {
      sendJson(response, 500, { error: "Chat service unavailable" });
    });
  });
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);

  if (requestUrl.pathname === "/api/chat") {
    return handleChat(request, response);
  }

  const relativePath = requestUrl.pathname === "/" ? "index.html" : requestUrl.pathname.slice(1);
  const filePath = path.resolve(projectRoot, relativePath);
  if (!filePath.startsWith(projectRoot + path.sep) || !fs.existsSync(filePath)) {
    return sendJson(response, 404, { error: "Not found" });
  }

  const extension = path.extname(filePath);
  response.writeHead(200, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
  });
  return fs.createReadStream(filePath).pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} is already in use - an old server instance is likely still running`,
    );
    return;
  }

  throw error;
});

server.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
});