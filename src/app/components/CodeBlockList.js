import CodeBlock from "./CodeBlock";

export default function CodeBlockList({ codeData }) {
  return codeData != null ? (
    <>
      <CodeBlock code={codeData["index.html"]} language="html" />
      <CodeBlock code={codeData["main.css"]} language="css" />
      <CodeBlock code={codeData["index.js"]} language="javascript" />
    </>
  ) : (
    <></>
  );
}
