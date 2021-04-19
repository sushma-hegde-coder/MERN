import React, { useState } from "react";
//import axios from 'axios'
import { useHistory } from "react-router-dom";
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';

const SignUp = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("http://localhost:3003/users", user);
//     history.push("/");
//   };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form>
         <div class="form-group">
           <label for="inputPassword" class="col-sm-2 col-form-label">First Name:</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="inputPassword" placeholder="Password" />
           </div>
         </div>
         <div class="form-group">
           <label for="inputPassword" class="col-sm-2 col-form-label">Second Name:</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="inputPassword" placeholder="Password" />
           </div>
         </div>
         <div class="form-group row">
           <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
           <div class="col-sm-10">
             <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
           </div>
         </div>
         <div class="form-group row">
           <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
           <div class="col-sm-10">
             <input type="text" class="form-control" id="inputPassword" placeholder="Password" />
           </div>
         </div>

          <div className="form-group">             
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;