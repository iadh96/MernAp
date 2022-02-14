import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getcurrent } from "../redux/Authactions";



function PrivateRoute({ children }) {
   const dispatch= useDispatch()

  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.AuthReducer.user);
  useEffect(()=>{dispatch(getcurrent())},[])
  return token ||(user && user.role == 'user') ? (
    children
  ) : (
    <Navigate to="/Login"></Navigate>
  );
}
export default PrivateRoute;