import axios from "axios";
import { GET_USER, GET_USERS, TOGGLE_FALSE, TOGGLE_TRUE } from "./UserTypes";


export const getallusers=()=> async (dispatch)=> {

    try {
        const res = await axios.get('/Users')
        console.log(res.data)
        dispatch ({type: GET_USERS, payload: res.data.collectionUser})
        console.log(res.data)
    } catch (error) {
        console.log (error)
        
    }
}

// export const AddnewUser= (NewUser)=> async (dispatch)=>{
//     try {
//         const res = await axios.post (`/api/Users`, NewUser)
//         dispatch (getallusers())

//     } catch (error) {
//         console.log (error)
//     }
// }

export const DeleteUser = (id) =>async (dispatch)=>{
    try {
        const res= await axios.delete (`/Users/${id}`)
        dispatch (getallusers())
    } catch (error) {
        console.log (error)
    }
}

//Njib User barka

export const getUser =(id) => async (dispatch)=>{
try {
    const res= await axios.get (`/Users/${id}`)
    console.log(res.data)
    dispatch ({type:GET_USER, payload:res.data.user})
} catch (error) {
    console.log(error)
    
}
}
export const toggletrue=()=>{
    return {  type:TOGGLE_TRUE}
   }

   export const togglefalse=()=>{
       return {  type:TOGGLE_FALSE}
      }

      export const EditUser= (id, NewUser)=> async (dispatch)=>{
          try {
              const res= await axios.put (`/Users/${id}`, NewUser)
              dispatch (getallusers())
          } catch (error) {
              
              console.log (error)
          }
      }
   