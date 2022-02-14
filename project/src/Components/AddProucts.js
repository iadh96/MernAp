import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addproduct,} from '../redux/Authactions';
import {Link, useNavigate} from 'react-router-dom'
function AddProucts() {
    const[title, settitle]= useState("");
    const[image,setimage]= useState("");
    const[Description,setdescription]= useState("");
    const dispatch= useDispatch();
const navigate=useNavigate()
  return <div>
       <input type="text" onChange={(e) => settitle(e.target.value)} />
      <input type="file" onChange={(e) => setimage(e.target.files[0])} />
      <input type="text" onChange={(e)=> setdescription(e.target.value)}/>
    <Link   to='/' ><button
       onClick={() =>dispatch(addproduct({ title, image,Description }))}>Add
       </button> </Link>  
    </div>
  
}

export default AddProucts;
