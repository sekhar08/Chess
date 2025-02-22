import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {
    gameManager.addUser(ws)
<<<<<<< HEAD
    ws.on("disconnect", () => gameManager.removeUser)
=======
    ws.on("disconnet", () => gameManager.removeUser)
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
  });

