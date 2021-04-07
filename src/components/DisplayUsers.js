import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useState, useEffect } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,    
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,    
      },
      
  }));

function DisplayUsers() {

const [users, setUsers] = useState([]);       

useEffect(() => {
    loadUsers();
   }, []);      //gets loaded when refreshed

const loadUsers = async () => {
  const res = await axios.get(`http://localhost:7000/allusers`);
  setUsers(res.data);
  console.log(JSON.stringify(users))
 };

const deleteUser = async id => {  
  alert("Are you sure you want to delete the user?")
  await axios.delete(`http://localhost:7000/users/${id}`);
  console.log("delete sent to server side")
  loadUsers();
};

const classes = useStyles()

return (
   <div className={classes.root}>
     {users.map((item, index) => (
        <Grid container className={classes.root} spacing={3}>

          <Grid item xs={5}>
            <Paper className={classes.paper}>{item.userName}</Paper>
           </Grid>
           
            <Grid item>
            <IconButton className={classes.icon}>
              <DeleteIcon onClick={() => deleteUser(item._id)}/>
            </IconButton>
            </Grid>
                 
        </Grid>   
     ))}
      </div>
    )
}

export default DisplayUsers;
