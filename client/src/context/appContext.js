import { createContext } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";

//app content
export const AppContext = createContext();

export const socket = io(SOCKET_URL);
