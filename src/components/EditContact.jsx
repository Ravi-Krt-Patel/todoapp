import { Link,useParams} from "react-router-dom"
import {useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const EditContact = ()=>{
	const [name,setName] = useState("");
		const [email,setEmail] = useState("");
		const [number,setNumber] = useState("");
	const {id} = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();


	const contacts = useSelector(state=>state);
	const currentContact = contacts.find(contact=>contact.id === parseInt(id));

	useEffect(()=>{
		if(currentContact){
			setName(currentContact.name);
			setEmail(currentContact.email);
			setNumber(currentContact.number);
		}
	},[currentContact]);

	const handleSubmit = (e)=>{
		e.preventDefault();
		const checkEmail = contacts.find((contact)=>contact.id !== parseInt(id) && contact.email === email && email);


		const checkNumber = contacts.find( (contact)=>contact.id !== parseInt(number) && contact.number === parseInt(number));


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
			id:parseInt(id),
			name,
			email,
			number,
		};
		dispatch({type:"UPDATE_CONTACT",payload:data});
		toast.success("Student updated successfully");
		navigate("/")		
	    

	}
	

	return (
		<div className="container" >
			{currentContact?(

			<>
			<div className="row">
				<h1 className="display-3 my-5 text-center" >Edit Contect {id} </h1>
				<div className="col-md-6 shadow mx-auto p-5">
					<form  onSubmit = {handleSubmit}>
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
							value="Update Student"
							className="btn btn-dark ml-2" />
							<Link to="/" className="btn btn-danger ml-2 ">Cancel</Link>
						</div>
						
					</form>
				</div>
			</div>
			</>
			):(
				<h1 className="display-3 my-5 text-center" >
					Studentcontact with id {id} is not exist
				</h1>
			)}
		</div>
	)
}