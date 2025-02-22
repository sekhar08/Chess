<<<<<<< HEAD
import { Chess } from "chess.js";
=======
import { Chess, WHITE } from "chess.js";
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
import { WebSocket } from "ws";
import { GAME_OVER, INIT_GAME, MOVE } from "./messages";


export class Game {
    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess
    private startTime: Date;

    constructor(player1: WebSocket, player2: WebSocket){
         this.player1 = player1;
         this.player2 = player2;
         this.board = new Chess();
         this.startTime = new Date();
         this.player1.send(JSON.stringify({
            type: INIT_GAME,
            payload: {
                color: "white"
            }
         }))

         this.player2.send(JSON.stringify({
            type: INIT_GAME,
            payload:{
                color: "black"
            }
         }))
    }


    makeMove(socket: WebSocket, move: {
        from: string,
        to: string
    }){

<<<<<<< HEAD
        if(this.board.moves().length % 2 === 0 && socket !== this.player1){
=======
        if(this.board.moves.length % 2 === 0 && socket !== this.player1){
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
            return 
        }


<<<<<<< HEAD
        if(this.board.moves().length % 2 === 1 && socket !== this.player2){
=======
        if(this.board.moves.length % 2 === 1 && socket !== this.player2){
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
            return 
        }
        
        try{
            this.board.move(move)
        }

        catch(e){
            return 
        }

        if(this.board.isGameOver()){
            this.player1.emit(JSON.stringify({
                type: GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "black" : "white"
                }
            }))

<<<<<<< HEAD
            this.player2.send(JSON.stringify({
=======
            this.player2.emit(JSON.stringify({
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
                type: GAME_OVER,
                payload: {
                    winner: this.board.turn() === "w" ? "black" : "white"
                }
            }))
            return;
        }

<<<<<<< HEAD
        if(this.board.moves().length % 2 === 0){
=======
        if(this.board.moves.length % 2 === 0){
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
            this.player2.emit(JSON.stringify({
                type: MOVE,
                payload: move
            }))
        }else {
<<<<<<< HEAD
            this.player1.send(JSON.stringify({
=======
            this.player1.emit(JSON.stringify({
>>>>>>> 21b32b43c9b1fe8c16bbdc6d84b1eef0649e5703
                type: MOVE,
                payload: move
            }))
        }


    }
}