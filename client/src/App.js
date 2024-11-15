import logo from './logo.svg';
import './App.css';
import react,{useState} from react;
import {BrowserRouter as Router } from 'rect-router-dom';
function App() {
  const [toggledrawersidebar,settoggledrawersidebar] = useState({
    display : "none"
  });
  const toggledrawer = ()=>{
    if(toggleDrawersidebar.display === "none"){
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
    <Navbar setEditCreateChanelbtn ={seteditcreatechanelbtn} toggledrawer={toggledrawer}/>
    </Router>
  );
}

export default App;
