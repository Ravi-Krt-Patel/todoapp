
import './App.css';
import {useState,useCallback} from "react";
import Todo from "./components/todo"
function App() {
  const [count,setCount] = useState(0);
  console.log("this is main app");
  const countHandle = useCallback(()=>{
    setCount((p)=>p+1)
  },[])
  return (
    <div className="App">
      <h1>counter {count}</h1>
      <Todo counter={countHandle} />
      <button onClick={countHandle}>click</button>
    </div>
  );
}

export default App;
