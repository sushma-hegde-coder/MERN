import express from 'express';
import createUser from '../controller/User.js';
import User from '../model/User.js';
import ReadUser from '../controller/ReadUser.js';
import DeleteUser from '../controller/DeleteUser.js';

const router = express.Router();
 
router.get('/allusers',ReadUser)

router.post('/user',createUser); 

router.delete('/users/:id',DeleteUser);
  
export default router;