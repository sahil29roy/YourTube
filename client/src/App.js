import logo from './logo.svg';
import './App.css';
import react,{ useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import Allroutes from "../src/AllRoutes"
import Createeditchannel from './pages/Channel/Createeditchannel';

import Drawersliderbar from '../src/components/Leftsidebar/Drawersliderbar'

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
  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);
  return (
    <Router>
      {
        videouploadpage && <Videoupload setvideouploadpage={setvideouploadpage} />
      }
      {editcreatechanelbtn && (
        <Createeditchannel seteditcreatechanelbtn={seteditcreatechanelbtn} />
      )}
      <Navbar seteditcreatechanelbtn={seteditcreatechanelbtn} toggledrawer={toggledrawer} />
      <Drawersliderbar toggledraw={toggledrawer} toggledrawersidebar={toggledrawersidebar} />
      <Allroutes seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage} />
    </Router>
  );
}

export default App;
