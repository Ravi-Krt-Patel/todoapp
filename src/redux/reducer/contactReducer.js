

const initial = [
	{
		id:0,
		name:"ravi",
		number:"344324324",
		email:"ravi@g.com"
	},
	{
		id:1,
		name:"sunil",
		number:"867324324",
		email:"sunil@g.com"
	}
];

const contactReducer = (state=initial, action)=>{
	switch(action.type) {
		case "ADD_CONTACT":
			state = [...state, action.payload]
			return state;
		case "UPDATE_CONTACT":
			const updatstate = state.map(contact => contact.id === action.payload.id?action.payload:contact);
			state = updatstate;
			return state;
		case "DELETE_CONTACT":
			const filterContact = state.filter(contact=>contact.id !== action.payload && contact.id !== action.payload.id);
			state = filterContact;
			return state;
		default:
			return state;
	}
};

export default contactReducer;