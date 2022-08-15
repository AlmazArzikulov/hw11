import { useReducer, useState } from "react";
import "./App.css";
import { ToDoForm } from "./components/TodoForm";
import {Ref} from './components/Ref'
import { Dubler } from "./components/Dubler";
// const userReducer = (state, action) => {
//   if (action.type === "ADD_PASSWORD") {
//     return {
//       ...state,
//       password: action.value,
//       isPasswordValid: action.isPasswordValid,
//     };
//   }
// };

function App() {
  // const [user, dispatchFn] = useReducer(userReducer, {
  //   name: "",
  //   password: "123",
  //   isPasswordValid: false,
  //   email: "test@gmail.com",
  //   isEmailValid: false,
  //   imageUrl: "https://someurl.jpeg",
  // });

  // const changePasswordHandler = (event) => {
  //   const inputValue = event.target.value;
  //   // action = действие
  //   dispatchFn({
  //     type: "ADD_PASSWORD",
  //     value: inputValue,
  //     isPasswordValid: inputValue.length >= 6,
  //   });
  // };

  // console.log(user);

  return (
    <div className="App">
      {/* event => {...} => changePasswordHandler (password)
      <input onChange={changePasswordHandler} /> */}
      {/* <ToDoForm/> */}
      {/* <Ref/> */}
      <Dubler/>
    </div>
  );
}
export default App;

// const [user, setUser] = useState({
//   name: "",
//   password: "123",
//   isPasswordValid: false,
//   email: "test@gmail.com",
//   isEmailValid: false,
//   imageUrl: "https://someurl.jpeg",
// });

// const changePasswordHandler = (password) => {
//   const inputValue = password.target.value;
//   const isPasswordValid = inputValue.length >= 6;
//   setUser((prevState) => {
//     return {
//       ...prevState,
//       password: inputValue,
//       isPasswordValid: isPasswordValid,
//     };
//   });
// };
