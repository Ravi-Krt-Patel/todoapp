
import {useState,memo,useRef,useEffect} from "react"
const Todo = () => {
	const useref = useRef();
	const [count,setCount] = useState(0);
	const [check,setCheck] = useState(true);
	console.log("rendering is hapening");

	useEffect(()=>{
		setTime();
	},[])

	const setTime = ()=>{
		useref.current = setInterval(()=>{
			setCount((p)=>p+1)
		},500)
	}


	return(<>
	<h1>this is todo {count}</h1>
	<button onClick={()=>{
		if(check === true) {
			clearInterval(useref.current);
			setCheck(false);
		}
		else if(check === false) {
			setTime();
			setCheck(true);
		}
	}} >togle</button>
	</>)
}

export default memo(Todo);