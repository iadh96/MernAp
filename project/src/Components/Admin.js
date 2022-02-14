import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getallusers} from "../redux/UserActions"


function Admin(){
    const dispatch= useDispatch()
    return(


<div>
    
    <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
    <div class="wrapper">
      <ul>
  <Link  to='/UserList'    onClick={()=> dispatch(getallusers())    } > <li   style={{color:'blue', margin: "25px"}} >Users</li> </Link>
  <Link  to='/Addproduct'   > <li    >Add product</li> </Link>
   {/* <Link   to='/AddUsers'   onClick={()=>  dispatch(togglefalse()) }   >    <li  >Add </li> </Link> */}

</ul>
</div>
<div class="content">
      <div class="title">
Welcome back admin </div>
</div>


        </div>



    )
}

export default Admin