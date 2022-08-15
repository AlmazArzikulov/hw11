import React from "react";
import { useState } from "react";

export const Dubler = (event) => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);

  const inputHandler = (event) => {
    setState(event.target.value);
  };
  const clickHandler = (event) => {
    event.preventDefault();
    setValue([...value,{value:state,id:Math.random().toString()}]);
    setState("");
  };
  const func = (d) => {
    const o = value.filter((i) => i.id !== d);
    setValue(o);
  };
  return (
    <div>
      <input
      
        onChange={(event) => inputHandler(event)}
        placeholder="печатает..."
        value={state}
      />
      <button onClick={clickHandler}>click</button>
      {value.map((item) => {
        return (
          <>
            <span key={item.id}></span>
            <h3>{item.value}: {new Date().toLocaleDateString()}</h3>
            <button onClick={() => func(item.id)} className="OneClick">
              delete
            </button>
          </>
        );
      })}
    </div>
  );
};
