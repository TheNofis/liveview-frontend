import CodeBlockList from "../components/CodeBlockList";

export default function CodePage() {
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
