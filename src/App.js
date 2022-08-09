import { useReducer } from "react";
import "./App.css";
import { Post } from "./components/Post";
// function reducer(counter,action) {
//   switch (action.type){
//     case 'increment':
//       return counter+1
//       case 'decrement':
//       return counter-1
//   }
// }
function reducer(state, action) {
  // switch (action.type) {
  //   case "plus":
  //     return state + 5;
  //     case 'minus':
  //     return state -5
  // }
}
function App() {
  // const [counter,dispatch]=useReducer(reducer,0)
  // const [state, dispatch] = useReducer(reducer, 0);

  return (
     <div>
      {/* <button onClick={()=>dispatch({type:'increment'})}>+</button>
    <h1>{counter}</h1>
    
    <button onClick={()=>dispatch({type:'decrement'})}>-</button> */}
      {/* <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button>{state}</button>
      <button onClick={()=>dispatch({type:'minus'})}>-</button> */}
      <Post/>
    </div>
  )
}

export default App;
