"use client";

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

import Welcome from "./components/Welcome";
import Header from "./components/Header";
import CodeBlockList from "./components/CodeBlockList";

export default function Home() {
  const [socket, setSocket] = useState(io("localhost:3001"));
  const [codeData, setCodeData] = useState(null);
  const [username, setUsername] = useState("hi");
  const [userData, setUserData] = useState(null);

  const iframe = useRef(null);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("clientConnect", socket.id);
      console.log("connect");
    });

    socket.on("fileContent", (data) => {
      if (codeData == null) return setCodeData(data);

      Object.keys(data).forEach((key) => {
        const dataNow = JSON.parse(JSON.stringify(codeData));
        dataNow[key] = data[key];
        setCodeData(dataNow);

        // Update iframe code
        if (!iframe?.current?.contentWindow?.location) return;
        iframe.current.src += "";
      });
    });
    socket.on("connectInfo", (data) => {
      setUserData(data);
    });
  });

  return (
    <div className="container">
      <Header username={username} />

      <div className="codeblock-list">
        {codeData != null ? <CodeBlockList codeData={codeData} /> : <></>}
      </div>
      <div class="iframe">
        <iframe
          src="http://localhost:3002"
          ref={iframe}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
