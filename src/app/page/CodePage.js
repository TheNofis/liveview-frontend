import CodeBlockList from "../components/CodeBlockList";

import { useRef } from "react";

export default function CodePage({ socket }) {
  const [codeData, setCodeData] = useState(null);
  const iframe = useRef(null);

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

  return (
    <>
      <div className="codeblock-list">
        {codeData != null ? <CodeBlockList codeData={codeData} /> : <></>}
      </div>
      <div className="iframe">
        <iframe
          src="http://localhost:3002"
          ref={iframe}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}
