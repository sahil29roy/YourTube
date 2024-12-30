import React from 'react'

const Auth = ({user,setauthbtn,seteditcreatechanelbtn})=> {
  return (
    <div className='Auth_container' onClick={()=>setauthbtn(false)}>
        <div className="Auth_container2">
            <p className="User_Details">
                <p className="fstChar_logo_App"></p>
            </p>
        </div>
      
    </div>
  )
}

export default Auth
