import { useRef, useState } from "react";

export const LinkToCopy = () => {
  const paragraphRef = useRef(null);
  const [text, setText] = useState("");
  const [isCopped, setCopped] = useState(false);

  const copyCodeToClipboard = () => {
    const code = paragraphRef.current.innerText;
    navigator.clipboard.writeText(code).then(() => {
      setText(code);
      setCopped(true);
    });
  };

  return (
    <>
      <div
        onClick={copyCodeToClipboard}
        style={{ width: "200px", margin: "auto", cursor: "pointer" }}
      >
        <p ref={paragraphRef}>
          {`import React from "react";
            const ActionButton = ({ label, action }) => {
                return <button onClick={action}>{label}</button>;
                };
         export default ActionButton`}
        </p>
      </div>
      {isCopped && (
        <div
          onClick={() => setCopped(false)}
          style={{ position: "absolute", top: 0, left: 550 }}
        >
          <h3>Text copped</h3>
        </div>
      )}
    </>
  );
};