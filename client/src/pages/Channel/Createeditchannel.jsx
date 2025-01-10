import React,{useState} from 'react'
import './Createeditchannel.css'
const Createeditchannel = ({seteditcreatechanelbtn}) => {
    const currentuser = {
        result: {
          email: "Sahil@gmail.com",
          joinedon: "14-02-2022",
        }
      }
    const [name,setaname]=useState(currentuser?.result.name)
    const[desc,setdesc]=useState(currentuser?.result?.desc)
    // console.log(name,desc,currentuser)
    const handlesubmit=()=>{
        if(!name){
            alert("Please enter name!!")
        }else if(!desc){
            alert("Please enter Description")
        }else{
            seteditcreatechanelbtn(false)
        }
    }
    
  return (
    <div className="container_CreateEditChanel">
        <input type="submit" name='text' value={'X'} className="ibtn_x" onClick={()=>seteditcreatechanelbtn(false)}/>
        <div className="container2_CreateEditChanel">
            <h1>{currentuser?.result?.name ? <>Edit</>:<>Craete</>} Your Channel</h1>
            <input type="text" placeholder='Enter Your/Chanel Name' name='text' value={name} onChange={(e)=>setaname(e.target.value)} className="ibox" />
            <textarea type="text" rows={15} placeholder='Enter Chanel Description' className='ibox' value={desc} onChange={(e)=>setdesc(e.target.value)} id=""></textarea>
            <input type="submit" value={"submit"} onClick={handlesubmit} className="ibtn" />        
        
        </div>
    </div>
  )
}

export default Createeditchannel