import React, { useEffect } from 'react';
import {Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {getcurrent, logout} from '../redux/Authactions';
import { useSelector, useDispatch } from 'react-redux';
import { getproducts} from '../redux/Authactions';
import Profile from './Profile';



function Navre() {

  const auth = useSelector(state => state.AuthReducer.auth)
  const dispatch= useDispatch();

  useEffect(()=> {
    dispatch(getproducts());
  }, []);

  const user= useSelector(state => state.AuthReducer.user)
  useEffect(()=> {
    dispatch(getcurrent());
  }, []);

  return <div>

    {
     localStorage.getItem('token') && auth && user.role == "user" ?
      <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link as={Link} to='/' >Products</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link  as={Link} to='/'  onClick={()=> dispatch(logout())}  eventKey="link-1">Log out</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link  as={Link} to='/profile'  onClick={()=> dispatch(Profile())}  eventKey="link-1">Profile</Nav.Link>
  </Nav.Item>

</Nav>

: localStorage.getItem('token') && auth && user.role == "admin" ?

<Nav defaultActiveKey="/home" as="ul">
<Nav.Item as="li">
  <Nav.Link as={Link} to='/' onClick={()=>dispatch(getproducts())}>Products</Nav.Link>
</Nav.Item>

<Nav.Item as="li">
  <Nav.Link  as={Link} to='/'  onClick={()=> dispatch(logout())}  eventKey="link-1">Log out</Nav.Link>
</Nav.Item>

<Nav.Item as="li">
  <Nav.Link  as={Link} to='/profile'  onClick={()=> dispatch(Profile())}  eventKey="link-1">Profile</Nav.Link>
</Nav.Item>

</Nav>

:
(

<Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link as={Link} to='/' onClick={()=> dispatch(getproducts)}>Products</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
    <Nav.Link  as={Link} to='/Login'   eventKey="link-1">Log in</Nav.Link>
  </Nav.Item>

  <Nav.Item as="li">
     <Nav.Link  as={Link} to='/Register'  eventKey="link-2">Register</Nav.Link>
  </Nav.Item>
</Nav>)



}

  </div>;
}

export default Navre;

