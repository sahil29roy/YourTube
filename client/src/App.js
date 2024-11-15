import logo from './logo.svg';
import './App.css';
import react,{ useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [toggledrawersidebar,settoggledrawersidebar] = useState({
    display : "none"
  });
  const toggledrawer = ()=>{
    if(toggledrawersidebar.display === "none"){
      settoggledrawersidebar({
        display : "flex",
      });
    }else{
      settoggledrawersidebar({
        display : "none",
      })
    }
  }
  const [editcreatechanelbtn,setEditCreateChanelbtn] = useState(false);
  const [videouploadpage,setvideouploadchannelbtn] = useState(false);
  return (
    <Router>
    <Navbar seteditcreatechanelbtn ={seteditcreatechanelbtn} toggledrawer={toggledrawer}/>
    </Router>
  );
}

export default App;
