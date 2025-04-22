import React, { useState } from "react";
import "./Forms.css";
import { Link } from "react-router-dom";

const Forms = () => {
 
  const [form, setFrom] = useState({
    firstname:"",
    lastname:"",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const validation = () => {
    const newError = {};
    if (!form.firstname) newError.firstname = "*invalid firstname";
    if (!form.lastname) newError.lastname = "*invalid lastname";
    if (!form.username) newError.username = "*invalid username";
    if (!form.email) newError.email = "*invalid email";
    if (!form.password) newError.password = "*invaild password";
    else {
      if (!/\S+@\S+.\S+/.test(form.email)) newError.email = "*missing error";
      
      else {
        if (form.password.length < 6)
          newError.password = "*must be 6 character";
        if (!/[a-z]/.test(form.password))
          newError.password = "*must one lowercase";
        if (!/[A-Z]/.test(form.password))
          newError.password = "*must one upper lowercase";
        if (!/[!@#$%&*?]/.test(form.password))
          newError.password = "*must one in special character";
      }
    }
    return newError;
};
const handlechange = (event) => {
    const { name, value } = event.target;
    setFrom({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationerror = validation();
    if (Object.keys(validationerror).length === 0) {
      console.log("form valid", form);
      window.location.href = "/Login";
      setFrom({
        firstname:"",
        lastname:"",
        username: "",
        email: "",
        password: "",
      });
      setError({});
    } else setError(validation());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="ads">
        <div className="form0">
          <h2>Register From</h2>
            <br/>
            <label>firstname</label>
            <br />
            <input
              type="text"
              name="firstname"
              placeholder="*firstname"
              onChange={handlechange}
              value={form.firstname}
            />
            {error.email && <p>{error.email}</p>}
          </div>
          <div className="form1">
            <br/>
            <label>lastname</label>
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="*lastname"
              onChange={handlechange}
              value={form.lastname}
            />
            {error.lastname && <p>{error.lastname}</p>}
          </div>
          <div className="form2">
          
            <br/>
            <label>username</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="*username"
              onChange={handlechange}
              value={form.username}
            />
            {error.username && <p>{error.username}</p>}
          </div>
          <div className="form3">
          
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
            {error.email && <p>{error.email}</p>}
          </div>
          <div className="form4">
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
            {error.password && <p>{error.password}</p>}
          </div>
         <p> Already have a account</p>
         <Link to="/Login">Login</Link>
          {/* <Link to="/"><button>Submit</button></Link> */}
          <br/>
          <button>Submit</button>
          

          </div>
          
        </form>
      
    </div>
  );
};

export default Forms;
