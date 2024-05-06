import React, { useState } from 'react'
import "./pass.css"
import axios from 'axios'
import toast from 'react-hot-toast'
const PassEdit = ({setPassEdit}) => {
const [email,setEmail]=useState()
const[oldPass,setOldPass]=useState()
const [newPass,setNewPass]=useState()
const [confirm,setConfirm]=useState()

let data={
    email:email,
    oldPaassword:oldPass,
    newPassword:newPass,
    confirmNewPassword:confirm
}
const EditPassword=()=>{
    if(newPass==confirm){
        axios.post("http://admin.lightsoft.ch/api/Auth/EditPassword",data)
        .then(res=>{console.log(res);
            setEmail('');
            setNewPass('');
            setOldPass('');
            setConfirm("");
        toast.success("Password has been Edited successfully") })
        .catch(err=>{console.log(err)})
    }
    else{
        toast.error("Passwords do not match")
    }

}


  return (
    <div className='pass-edit'>
        <form action="">
            <div className="fas fa-close close" onClick={()=>setPassEdit(false)}></div>
            <h2>Passwort bearbeiten</h2>
            <div className="box">
            <input type="email"  placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}} name="" id=""/>
            </div>
            <div className="box">
            <input type="password"  placeholder='Old Password' value={oldPass} onChange={(e)=>{setOldPass(e.target.value)}} name="" id=""/>
            </div>
            <div className="box">
            <input type="password"  placeholder='New Password' value={newPass} onChange={(e)=>{setNewPass(e.target.value)}} name="" id=""/>
            </div>
            <div className="box">
        
            <input type="password" placeholder='Confirm Password'  value={confirm} onChange={(e)=>{setConfirm(e.target.value)}} name="" id=""/>
            </div>
            <button type='button' onClick={()=>EditPassword()}>Submit</button>
        </form>
    </div>
  )
}

export default PassEdit