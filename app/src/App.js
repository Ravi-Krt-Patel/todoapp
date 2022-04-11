
import './App.css';
import {ToastContainer} from "react-toastify";
import {Navbar} from "./components/Navbar"
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {AddContect} from "./components/AddContect";
import {EditContact} from "./components/EditContact"
function App() {
  
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddContect/>}></Route>
        <Route path="/edit/:id" element={<EditContact/>} ></Route>
      </Routes>
    </div>
  );
}



export default App;
