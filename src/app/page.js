"use client";

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

import Header from "./components/Header";

import CodePage from "./page/CodePage";
import WelcomePage from "./page/WelcomePage";

export default function Home() {
  const [socket, setSocket] = useState(io("localhost:3001"));
  const [codeData, setCodeData] = useState(null);
  const [conectionInfo, setConnectionInfo] = useState(null);
  const [userData, setUserData] = useState(null);

  const iframe = useRef(null);

  useEffect(() => {
    socket.on("connect", () => socket.emit("registerClient", socket.id));
    socket.on("connectInfo", (data) => setConnectionInfo(data));

    socket.on("fileContent", (data) => {
      if (codeData == null) return setCodeData(data);

      Object.keys(data).forEach((key) => {
        const dataNow = JSON.parse(JSON.stringify(codeData));
        dataNow[key] = data[key];
        setCodeData(dataNow);

        // Update iframe page
        if (!iframe?.current?.contentWindow?.location) return;
        iframe.current.src += "";
      });
    });
    socket.on("userData", (data) => setUserData(data));
  });

  return (
    <div className="container">
      <Header username={userData?.username} />

      {userData == null && socket != null ? (
        <WelcomePage socket={socket} />
      ) : (
        <CodePage codeData={codeData} username={userData?.username} />
      )}
    </div>
  );
}
