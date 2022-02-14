import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Products from './Components/Products';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import { useDispatch } from "react-redux";
import PrivateRoute from './Components/PrivateRoute';
import Admin from './Components/Admin';
import AdminRoute from './Components/AdminRoute';
import AddProducts from './Components/AddProucts';
import Navre from './Components/Navre';
import AddUsers from './Components/AddUsers';
import UserList from './Components/UserList';
import UserCard from './Components/UserCard';


function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      
   <Navre></Navre>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products/>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      {/* <Route path='/AddProducts' element={<AddProducts/>}/> */}
      <Route path="/Profile" element={
      <PrivateRoute>
      <Profile /> 
      </PrivateRoute>
      }
      />
      <Route path='/Admin' element ={
        <AdminRoute>
          <Admin></Admin>
        </AdminRoute>
      }/>
    
    <Route path='/Addproduct' element ={
        <AdminRoute>
          <AddProducts></AddProducts>
        </AdminRoute>
      }/>

      <Route path='/editUser'element ={
        <AdminRoute>
          <AddUsers></AddUsers>
        </AdminRoute>
      }/>

      <Route path='/UserList' element={
        <AdminRoute>
          <UserList></UserList>
        </AdminRoute>
      }/>

      <Route path='/UserCard' element={
        <Admin>
          <UserCard></UserCard>
        </Admin>
      }/>
    
    </Routes>
      
    </div>
  );
}

export default App;
