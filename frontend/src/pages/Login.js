import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [form, setFrom] = useState({
     
       
        email: "",
        password: "",
      });
      
    const handlechange = (event) => {
        const { name, value } = event.target;
        setFrom({
          ...form,
          [name]: value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
          console.log("form valid", form);
          window.location.href = "/sweet";
          setFrom({
            email: "",
            password: "",
          });
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div class="pinny">
          <div className="form5">
          <h2>Login Form</h2>
            <br/>
            <label>Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="*email"
              onChange={handlechange}
              value={form.email}
            />
          </div>
          <div className="form6">
            <br/>
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="*password"
              onChange={handlechange}
              value={form.password}
            />
          </div>
          <p>Don't have a account</p>
          <Link to="/Forms">Register</Link>
          {/* <Link to="/"><button>Submit</button></Link> */}
          <br/>
          <button>Submit</button>

          </div>
          
        </form>
    </div>
  )
}

export default Login