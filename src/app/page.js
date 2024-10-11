"use client";

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

import Header from "./components/Header";

import CodePage from "./page/CodePage";
import WelcomePage from "./page/WelcomePage";

export default function Home() {
  const [socket, setSocket] = useState(io("localhost:3001"));
  const [conectionInfo, setConnectionInfo] = useState(null);

  useEffect(() => {
    socket.on("connect", () => socket.emit("registerClient", socket.id));
    socket.on("connectInfo", setConnectionInfo);
  });

  return (
    <div className="container">
      <Header socket={socket} />

      {socket != null ? (
        <WelcomePage socket={socket} />
      ) : codeData != null ? (
        <CodePage socket={socket} />
      ) : (
        <></>
      )}
    </div>
  );
}
