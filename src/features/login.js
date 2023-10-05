import React, { useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    const val = localStorage.getItem('userData');
    const obj = JSON.parse(val);
    // if form data and obj mathches ==> if(_.isEqual(obj,formData) we generate token
    if(_.isEqual(obj,formData)){
        navigate('/todolist');
    }else{
        window.location.reload();
        alert("Wrong Credenntials!!");
    }
    

  };

  return (
    <div className='login'>
      <h1 style={{textAlign:'center'}}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;


