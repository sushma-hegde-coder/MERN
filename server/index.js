import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import createUser from './controller/User.js';
import userRoutes from './Routes/route.js';
import cors from 'cors';

const app = express();

app.use(cors()) // Use this after the variable declaration
 app.listen(7000, function() {
       console.log('listening on 7000')
      })

app.use(bodyParser.json({limit: "20mb",extended:true }))
app.use(bodyParser.urlencoded({limit: "20mb",extended:true }))
  
const url = 'mongodb+srv://database-trial:trial@mongodb-trial.mfimy.mongodb.net/name-input?retryWrites=true&w=majority' ;

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,           
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected!!');
        app.use('/',userRoutes);        
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
   
};

 connectDB();



