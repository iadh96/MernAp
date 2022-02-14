import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getcurrent } from '../redux/Authactions';
import Products from './Products';


function Profile () {
    const dispatch = useDispatch();
    useEffect (()=>{
        dispatch (getcurrent());

    },[]);

    const user = useSelector ((state)=>(state.AuthReducer.user));
    const myproducts = useSelector ((state)=>(state.ProductReducer.user));
  return(


   <div>
<h1>Welcome {user && user.email}</h1>

{myproducts && myproducts.map((el)=> <Products el={el}></Products>)}

  </div>

  );
}

export default Profile;

