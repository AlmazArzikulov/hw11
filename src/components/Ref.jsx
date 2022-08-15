import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const Ref = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    navigator.clipboard.readText().then((text) => {
      inputRef.current.value(text);
    });
  });
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
