import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";



export const AddContect = ()=>{
	const [name,setName] = useState("");
	const [email,setEmail] = useState("");
	const [number,setNumber] = useState("");
	const contacts = useSelector((store)=>store);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	


	const handleSubmit = (e)=>{
		e.preventDefault();
		const checkEmail = contacts.find(contact => contact.email === email && email);
		const checkNumber = contacts.find(contact => contact.number === number && number);
		console.log(checkNumber)
		if(!email || !number || !name){
			return toast.warning("Please fill the all field!");
		}
		if(checkEmail){
			return toast.error("This email is already Exist");
		}
		if(checkNumber){
			return toast.error("This Number is already Exist");
		}
 
		const data = {
			id:contacts[contacts.length-1].id+1,
			name,
			email,
			number,
		};
		dispatch({type:"ADD_CONTACT",payload:data});
		toast.success("Student added successfully");
		navigate("/")		
	    

	}

	return (
		<div className="container" >
			<div className="row">
				<h1 className="display-3 my-5 text-center" >Add Contect</h1>
				<div className="col-md-6 shadow mx-auto p-5">
					<form onSubmit={handleSubmit} >
						<div className="form-group my-2" >
							<input type="text" className="form-control" 
							value={name}
							onChange={(e)=>{setName(e.target.value)}}
							placeholder="Name"/>
						</div>
						<div className="form-group my-2" >
							<input type="email" 
							value={email}
							onChange={(e)=>{setEmail(e.target.value)}}
							className="form-control" placeholder="Email"/>
						</div>
						<div className="form-group my-2" >
							<input type="number" 
							value={number}
							onChange={(e)=>{setNumber(e.target.value)}}
							className="form-control" placeholder="Number"/>
						</div>
						
						 <div className="form-group my-2" >
							<input type="submit" 
							value="Add Student"
							className="btn btn-block btn-dark my-2" />
						 </div>
						
						
					
						
						
					</form>
				</div>
			</div>
		</div>
	)
}