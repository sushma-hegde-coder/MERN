import User from '../model/User.js';

const ReadUser = async (req,res) => {
    try {
        const allUsers = await User.find();
 
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message()})   
    }
 }
 
 export default ReadUser;