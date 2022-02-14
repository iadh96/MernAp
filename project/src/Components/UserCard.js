import {Card, ListGroup} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {DeleteUser, getUser, toggletrue} from '../redux/UserActions'


function UserCard ({el}){
const dispatch= useDispatch()
return (

<Card style={{ width: '18rem' }}>
  <Card.Header>{el.email}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>
       
        <Link to='/editUser' onClick={()=>{dispatch(getUser(el._id)); dispatch (toggletrue())}} >
        <button > Edit </button>
        </Link>
    </ListGroup.Item>
    <ListGroup.Item>
        <button onClick={()=>{dispatch(DeleteUser(el._id))}} >Delete </button>
    </ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
)

}
export default UserCard