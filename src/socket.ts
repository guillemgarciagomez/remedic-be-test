import express from 'express';
import http from 'http';
import * as socketio from 'socket.io';


const socketServer = new http.Server(express());

const io = new socketio.Server(socketServer, { cors: {origin:'*' } });

io.on('connection', (socket: socketio.Socket) => {
  console.log('user connected! :', socket.id);
  // socket.on('message from FE', (msg:string) => {
  //   io.emit('message from BE', msg);
  // });
})

export default socketServer

//CLIENT APP.tsx
// socket from socket.io-client
// socket.connect(() =>
//  socket.on('message from BE', () => )
// )
//
