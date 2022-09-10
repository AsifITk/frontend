import { createContext } from "react";
import io from "socket.io-client";



const socket = io("https://tictakt.herokuapp.com/", {
  transports: ["websocket"],
});
const SocketContext = createContext(null);

export { socket, SocketContext };
