import axios from "axios";
import { REGISTER, LOGIN, FAIL, GET_CURRENT, CLEARERRORS, LOGOUT, GET_PRODUCTS, MY_PRODUCTS } from "./Authtypes"







export const register = (newuser, Navigate) => async (dispatch) => {
    try {
      const res = await axios.post("/auth/signUp", newuser);
      dispatch({ type: REGISTER, payload: res.data });
      console.log(res.data.user.role);
      if( res.data.user.role=='user'){Navigate("/Profile")}
      if( res.data.user.role=='admin'){Navigate("/Admin")}
      ;
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };


  export const login = (newuser, Navigate) => async (dispatch) => {
    try {
      const res = await axios.post("/auth/signIn", newuser);
      dispatch({ type: LOGIN, payload: res.data });
      console.log(res.data);
      if( res.data.user.role=='user'){Navigate("/Profile")}
      if( res.data.user.role=='admin'){Navigate("/Admin")}
    } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data });
    }
  };

  
export const getcurrent = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: token,
      },
    };
    try {
      const res = await axios.get("/auth/current", config);
  
      dispatch({ type: GET_CURRENT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  export const logout = () => {
    return { type: LOGOUT };
  };

 
  export const clearerrors = () => {
    return { type: CLEARERRORS };
  };

  export const getproducts = ()=> async (dispatch) => {
    try {
      const res = await axios.get("/product/Getproduct");
      dispatch ({type:GET_PRODUCTS, payload:res.data});
    } catch (error) {
      console.log(error);
      
    }

  };

  export const myproducts = () => async (dispatch) =>{
    const token= localStorage.getItem ("token");
    const config= {
      headers:{
        authorization:token
      },
    };
    try {
      const res = await axios.get("/Products/myproducts", config);
      dispatch ({type:MY_PRODUCTS, payload:res.data});
      console.log(res.data.myproducts)
    } catch (error) {
      console.log(error);
    }

  };

  export const addproduct = ({title,image,Description}) => async (dispatch) =>{
    const token= localStorage.getItem ("token");
    const config= {
      headers:{
        authorization:token
      },
    };
    const info = new FormData();
    info.append("title", title);
    info.append("image", image);
    info.append("description", Description);
    try {
      const res = await axios.post("/product/Addproduct", info, config)
      dispatch(getproducts());

    } catch (error) {
      console.log (error);
    };


  }

