import React from 'react';
//import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import axios from 'axios';
import DisplayUsers from './components/DisplayUsers';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function App() {

  
const [user, setUser] = useState({
  userName: ""  
});

const { userName } = user;
const onInputChange = e => {
  setUser({ ...user, [e.target.name]: e.target.value });
  console.log(user);
};


const onSubmit = async e => {
  alert(JSON.stringify(user))
  e.preventDefault();  
  await axios.post('http://localhost:7000/user',user).then( () => {
    //window.location.reload(false);
    console.log("sent to server side")
  })
} 

const classes = useStyles();

  return (
   <div>
    <form className={classes.root} noValidate autoComplete="off">      
      <TextField id="outlined-basic"
       label="Name" variant="outlined"
       name="userName"
       value={userName}
       onChange={e => onInputChange(e)}/>
      <Button variant="contained" color="secondary" onClick={e => onSubmit(e)}>
        Add
      </Button>
    </form>
      <DisplayUsers />
   </div>
  );
}
