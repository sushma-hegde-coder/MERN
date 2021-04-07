import User from "../model/User.js";

const createUser = async (req,res) => {        
    const data = req.body;     
    const newUser = new User(data); 
    try {
        await newUser.save();
        console.log(data);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
 }


export default createUser;