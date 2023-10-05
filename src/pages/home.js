import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
      <div className="home">
        <h1> Login or Signup to use Todo list</h1>
        <div className='loginbutton'>
        <Link to="/login"><h1>Login</h1></Link>
        <Link to="/signup"><h1>Signup</h1></Link>
        </div>
      </div>
  );
}

export default Home;