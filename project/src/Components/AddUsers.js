import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { EditUser} from '../redux/UserActions'

function AddUsers() {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const dispatch=useDispatch()
    const Oneuser=useSelector(state=>state.UserReducer.User)
    const edit=useSelector(state=>state.UserReducer.edit)
  useEffect (() => {
      if(edit) {setEmail(Oneuser.email); setPassword(Oneuser.password)}
      else {setEmail(""); setPassword("")}
  },[])

  return (
    <div class="containerAdd">
 
    <div class="brand-title">Add new user</div>
    <div class="inputs">
      <label>Email</label>
      <input type="email" placeholder="example@test.com"     value={email}   onChange={(e)=>setEmail(e.target.value)}  />
      <label>Password</label>
      <input type="password" placeholder="password"   value={password}   onChange={(e)=>setPassword(e.target.value)} />
      <button  onClick={()=>{dispatch(EditUser(Oneuser && Oneuser._id, {email,password}))}}>Edit</button> 
      </div>
      </div>
  )
}

export default AddUsers;
