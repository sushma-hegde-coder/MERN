import User from '../model/User.js';

const DeleteUser = async (req,res) => {
    const id = req.params.id;
    console.log(id)
    try {
       await User.findByIdAndRemove(id).exec();
       console.log("deleted")
       res.send('Successfully deleted')
    } catch (error) {
        console.log(error);
    }
 }

 export default DeleteUser;