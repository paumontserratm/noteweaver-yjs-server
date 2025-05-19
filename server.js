import { WebSocketServer } from 'ws'
import http from 'http'
import { setupWSConnection } from 'y-websocket'

const port = process.env.PORT || 1234
const server = http.createServer()

const wss = new WebSocketServer({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req)
})

server.listen(port, () => {
  console.log(`✅ Yjs WebSocket Server running on port ${port}`)
})
