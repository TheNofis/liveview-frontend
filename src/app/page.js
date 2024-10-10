"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Home() {
  const [socket, setSocket] = useState(io("localhost:3001"));
  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("clientConnect", socket.id);
      setInterval(() => {
        console.log(123);
        socket.emit("startLiveServer", socket.id);
      }, 1000);

      console.log("connect");
    });
    socket.on("fileContent", (data) => {
      console.log(data);
    });
  });
  return <div>123</div>;
}
