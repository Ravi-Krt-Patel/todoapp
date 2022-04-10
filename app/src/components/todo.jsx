
import {useState,memo} from "react"
const Todo = (props) => {
	const {counter} = props;
	const [count,setCount] = useState(0)
	console.log("rendering is hapening");
	return(<>
	<h1>this is todo {count}</h1>
	<button onClick={counter}>child</button>
	</>)
}

export default memo(Todo);