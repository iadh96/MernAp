const UserSchema= require('../models/auth')



// exports.AddUser = async (req,res)=>{

//     const {email, password}= req.body;
//     try {
//         const NewUser = new UsersSchema(req.body);
//         const Exists = await UsersSchema.findOne({email})
//          if (Exists){
//              return res.status (400).send ('User already exists')
//          }
//          await NewUser.save ();
//         res.status (200).send({msg:"User added successfully",NewUser})
        
//     } catch (error) {
//         res.status (500).send({msg:"Could not add user"})
//     }

// }
exports.DeleteUser = async (req,res)=>{
    const {id} = req.params
    try {
        const deleteUser = await UserSchema.findOneAndDelete({_id : id});
        res.status (200).send ({msg:"User deleted successfully"});
        
    }
catch (error) {
    res.status(500).send({msg:"Could not delete user"})
}
}

exports.UpdateUser = async (req,res)=>{
    const {id} = req.params
    try {
        const updateUser = await UserSchema.findByIdAndUpdate(id,{$set : {...req.body}})
        res.status(200).send({ msg:'User Updated' ,updateUser});
    } catch (error) {
        res.status(500).send({msg:'Could not update user'})
    }
}

exports.ShowUser =  async (req,res)=>{
    try {
       const collectionUser =  await UserSchema.find();
        res.status(200).send({msg:"List of users",collectionUser});
    } catch (error) {
        res.status(500).send({msg:"Could not find list of users"})
    }
}
exports.ShowOneUser =  async (req,res)=>{
    const {id}=req.params
    try {
       const user =  await UserSchema.findById(id);
        res.status(200).send({msg:"user",user});
    } catch (error) {
        res.status(500).send({msg:"Could not find user"})
    }
}
