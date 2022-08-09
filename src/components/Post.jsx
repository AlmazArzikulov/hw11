import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Post = (props) => {
  const [color, setcolor] = useState(false);
  const divRef = useRef();
  useEffect(() => {
    setTimeout(() => {
        setcolor(!color)
        divRef.current.style.background=color?'black':'red'
    }, 1000);
   
  }, [color]);

  return <div className="block" ref={divRef}></div>;
};
