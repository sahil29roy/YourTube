import React ,{useState}from 'react'
import  './Comment.css'
import moment from 'moment'
const Displaycommment = ({cid,commentbody,userid,commenton,usercommented}) => {
    const [edit,setedit]=useState(false)
    const[cmtnody,setcommentbdy]=useState("")
    const [cmtid,setcmntid]=useState("")
    const currentuser={}
    const handleedit=(ctid,ctbdy)=>{
        setedit(true)
        setcmntid(ctid)
        setcommentbdy(ctbdy)
    }
    const haneleonsubmit=(e)=>{
        // e.preventDefault();
        if(!cmtnody){
            alert("type your comment");
        }else{
            setcommentbdy("")
        }
        setedit(false)
    }
    

  return (
    <>
    {edit?(
        <>
        <form  className="comments_sub_form_commments" onSubmit={haneleonsubmit() }>
            <input type="text" onChange={(e)=>setcommentbdy(e.target.value)} placeholder='Edit comments..' value={cmtnody} className="comment_ibox" />
            <input type="submit" value="change" className="comment_add_btn_comments" />
        </form>
        </>
    ):(
        <p className="comment_body">{commentbody}</p>
    )}
    <p className="usercommented">{" "}- {usercommented} commented {moment(commenton).fromNow()}</p>
    {currentuser?.result?._id=== userid && (
        <p className="EditDel_DisplayCommendt">
            <i>Delete</i>
        </p>
    )}
    </>
  )
}

export default Displaycommment