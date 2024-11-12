import logo from './logo.svg';
import './App.css';
import react,{useState} from react;
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
    <>
    <Navbar setEditCreateChanelbtn ={seteditcreatechanelbtn} toggledrawer={toggledrawer}/>
    </>
  );
}

export default App;
