const http = require('http');
const WebSocket = require('ws');
const setupWSConnection = require('y-websocket/bin/utils.js').setupWSConnection;

const PORT = process.env.PORT || 10000;

// 1) Servidor HTTP mínimo para health checks
const server = http.createServer((req, res) => {
  // Para cualquier petición HTTP, responde 200 OK
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK');
});

// 2) Acopla WebSocket al mismo servidor HTTP
const wss = new WebSocket.Server({ server });
wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

// 3) Levanta servidor
server.listen(PORT, () => {
  console.log(`✅ Yjs WebSocket + HTTP Server running on port ${PORT}`);
});
