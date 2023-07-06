/* eslint-disable no-var */
import { getCookie } from "cookies-next";
import { io, Socket } from "socket.io-client";

declare global {
  var socket: Socket;
}

export const getConnectionSocket = () => {
  if (!global.socket) {
    const username = getCookie("username");

    const socket = io("http://localhost:3000", {
      extraHeaders: {
        id: username as string,
      }
    });

    global.socket = socket;
  }

  return global.socket;
};