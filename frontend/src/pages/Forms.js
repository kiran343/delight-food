import React, { useState } from "react";
import "./Forms.css";

const Forms = () => {
  const [form, setFrom] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const validation = () => {
    const newError = {};
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
      window.location.href = "/sweet";
      setFrom({
        username: "",
        email: "",
        password: "",
      });
      setError({});
    } else setError(validation());
  };
  return (
    <div>
      <div class="ads">
        <form onSubmit={handleSubmit}>
          <div className="form1">
            <label>Username</label>
            <br />
            <input
              type="text"
              name="username"
              onChange={handlechange}
              value={form.username}
            />
            {error.username && <p>{error.username}</p>}
          </div>
          <div className="form2">
            <label>Email</label>
            <br />
            <input
              type="text"
              name="email"
              onChange={handlechange}
              value={form.email}
            />
            {error.email && <p>{error.email}</p>}
          </div>
          <div className="form3">
            <label>Password</label>
            <br />
            <input
              type="text"
              name="password"
              onChange={handlechange}
              value={form.password}
            />
            {error.password && <p>{error.password}</p>}
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
