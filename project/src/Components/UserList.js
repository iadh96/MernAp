import { useSelector } from "react-redux"
import UserCard from "./UserCard"


function UserList(){

    const Users= useSelector(state=> state.UserReducer.Users)
    return(
        <div>
            {Users.map(el=> <UserCard el={el} />)}
        </div>
    )
}

export default UserList