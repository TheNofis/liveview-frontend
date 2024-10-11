"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import Header from "./components/Header";

import CodePage from "./page/CodePage";
import WelcomePage from "./page/WelcomePage";

export default function Home() {
  const [socket] = useState(io("localhost:3001"));
  const [conectionInfo, setConnectionInfo] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    socket.on("connect", () => socket.emit("registerClient", socket.id));
    socket.on("connectInfo", setConnectionInfo);
  });

  return (
    <div className="container">
      <Header socket={socket} />

      {auth ? (
        <CodePage socket={socket} />
      ) : (
        <WelcomePage socket={socket} setAuth={setAuth} />
      )}
    </div>
  );
}
