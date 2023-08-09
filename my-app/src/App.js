import './App.css';
import Array from './Components/Array';
import LinkedList from './Components/LinkedList';
import Navbar from './Components/Navbar';
import Data from './Components/Data';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Choose from './Components/Choose';
import Queue from './Components/Queue';
import Stack from './Components/Stack';
import BinaryTree from './Components/BinaryTree';
import BST from './Components/BST';
import Heap from './Components/Heap';
import Hashing from './Components/Hashing';
import Graph from './Components/Graph';
import Login from './Components/login_component';
import SignUp from './Components/signup_component';
import UserDetails from './Components/userDetails';
import QList from './Components/QList';
import Eight1 from './Components/Eight1';
import Ten1 from './Components/Ten1';
import Fourteen1 from './Components/Fourteen1';
import Twelev1 from './Components/Twelev1';
import Nine1 from './Components/nine1';
import Eight2 from './Components/Eight2';
import Sixteen1 from './Components/Sixteen1';
import Thirteen1 from './Components/Thirteen1';
import Thirteen2 from './Components/Thirteen2';
import Ten2 from './Components/Ten2';
import Twelev2 from './Components/Twelev2';
import Eleven1 from './Components/Eleven1';
import Nine2 from './Components/Nine2';
import Twelev3 from './Components/Twelev3';
import Eight3 from './Components/Eight3';
import Nine3 from './Components/Nine3';
import Fifteen1 from './Components/Fifteen1';
import Twenty1 from './Components/Twenty1';
import Twelev4 from './Components/Twelev4';
import Thirteen3 from './Components/Thirteen3';
import Nineteen1 from './Components/Nineteen1';
import { AboutUs } from './Components/AboutUs';
import Home from './Components/Home';

export default function App() {
  const loggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        {loggedIn==="true"? <Navbar name="LOGOUT" start="GET STARTED" mg="65%"/>:<Navbar name="SIGN IN" start="" mg="75%"/>}
        <Routes>
          <Route path='/' element={loggedIn==="true"?<Choose/>:<Home/>}></Route>
          <Route exact path="/Login" element={loggedIn==="false"?<Login/>:<Home/>}/>
          <Route path='/userDetails' element={loggedIn==="true"?<UserDetails/>:<Home/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
          <Route path="/SignUp" element={loggedIn==="false"?<SignUp/>:<Home/>}></Route>
          <Route path="/Choose" element={loggedIn==="true"?<Choose/>:<Home/>}/>
          <Route path="/Data" element={loggedIn==="true"?<Data/>:<Home/>}/>
          <Route path="/Array"  element={loggedIn==="true"?<Array/>:<Home/>}/>
          <Route path="/LinkedList" element={loggedIn==="true"?<LinkedList/>:<Home/>}/>
          <Route path="/Queue" element={loggedIn==="true"?<Queue/>:<Home/>}/>
          <Route path="/Stack" element={loggedIn==="true"?<Stack/>:<Home/>}></Route>
          <Route path="/BinaryTree" element={loggedIn==="true"?<BinaryTree/>:<Home/>}></Route>
          <Route path="/BST" element={loggedIn==="true"?<BST/>:<Home/>}></Route>
          <Route path="/Heap" element={loggedIn==="true"?<Heap/>:<Home/>}></Route>
          <Route path="/Hashing" element={loggedIn==="true"?<Hashing/>:<Home/>}></Route>
          <Route path="/Graph" element={loggedIn==="true"?<Graph/>:<Home/>}></Route>
          <Route path='/QList' element={loggedIn==="true"?<QList/>:<Home/>}/>
          <Route path='/Eight1' element={loggedIn==="true"?<Eight1/>:<Home/>}/>
          <Route path='/Ten1' element={loggedIn==="true"?<Ten1/>:<Home/>}/>
          <Route path='/Fourteen1' element={loggedIn==="true"?<Fourteen1/>:<Home/>} />
          <Route path='/Twelev1' element={loggedIn==="true"?<Twelev1/>:<Home/>} />
          <Route path='/nine1' element={loggedIn==="true"?<Nine1/>:<Home/>} />
          <Route path='/Eight2' element={loggedIn==="true"?<Eight2/>:<Home/>}/>
          <Route path='/Sixteen1' element={loggedIn==="true"?<Sixteen1/>:<Home/>} />
          <Route path='/Thirteen1' element={loggedIn==="true"?<Thirteen1/>:<Home/>} />
          <Route path='/Thirteen2' element={loggedIn==="true"?<Thirteen2/>:<Home/>} />
          <Route path='/Ten2' element={loggedIn==="true"?<Ten2/>:<Home/>}/>
          <Route path='/Choose' element={loggedIn==="true"?<Choose/>:<Home/>} />
          <Route path='/Twelev2' element={loggedIn==="true"?<Twelev2/>:<Home/>} />
          <Route path='/Eleven1' element={loggedIn==="true"?<Eleven1/>:<Home/>} />
          <Route path='/Nine2' element={loggedIn==="true"?<Nine2/>:<Home/>} />
          <Route path='/Twelev3' element={loggedIn==="true"?<Twelev3/>:<Home/>} />
          <Route path='/Eight3' element={loggedIn==="true"?<Eight3/>:<Home/>}/>
          <Route path='/Nine3' element={loggedIn==="true"?<Nine3/>:<Home/>} />
          <Route path='/Fifteen1' element={loggedIn==="true"?<Fifteen1/>:<Home/>} />
          <Route path='/Twenty1' element={loggedIn==="true"?<Twenty1/>:<Home/>} />
          <Route path='/Twelev4' element={loggedIn==="true"?<Twelev4/>:<Home/>} />
          <Route path='/Thirteen3' element={loggedIn==="true"?<Thirteen3/>:<Home/>} />
          <Route path='/Nineteen1' element={loggedIn==="true"?<Nineteen1/>:<Home/>} />
          <Route path='/Home' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}
