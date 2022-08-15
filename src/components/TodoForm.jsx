import { useReducer } from "react";

const formReducer = (state, action) => {
  if (action.type === "ADD_EMAIL") {
    return {
      value: action.emailValue,
      isValid: action.emailValue.includes("@"),
    };
  }
  if (action.type === "PASTE") {
    return alert()
    
  }
  if (action.type === "CUT") {
    return alert()
    
  }
};

export const ToDoForm = () => {
  const [email, dispatch] = useReducer(formReducer, {
    value: "",
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    dispatch({ type: "ADD_EMAIL", emailValue });
  };

  const cutHandler = (event) => {
    dispatch({ type: "CUT" });
  };

  const pasteHandler = (event) => {
    // const pastV = event.target.value;
    dispatch({ type: "PASTE" });
  };

  return (
    <>
      <input
        onCut={cutHandler}
        onPaste={pasteHandler}
        onChange={emailChangeHandler}
        type="email"
      />
      <div>{email.value}</div>
    </>
  );
};
