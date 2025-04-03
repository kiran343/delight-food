import React from "react";
import { toast, ToastContainer } from "react-toastify";
import './Upload.css'

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form =event.target;
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;

    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      address === "" 
    ) {
      toast.warn("fill the required fields");
      console.log("fill the required fields")
    }
    const foodObj = {firstname,lastname, email,password,address};
    console. log(foodObj);
    fetch("http://localhost:5002/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodObj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("data added successfully");
        form.reset();
         window.location.href = "/update";
      });
  };
  return (
    <div>
      <ToastContainer />
      <div class="card upload6">
        <div class="card-body upload5">
          <form onSubmit={handleSubmit}>
            <h2>UPLOAD</h2>
            <div class="upload0">
              <label value="firstname">firstname :</label><br/>
              <input type="text" name="firstname"/>
              <div class="upload1">
                <label value="lastname">lastname :</label><br/>
                <input type="text" name="lastname" />
              </div>
              <div class="upload2">
                <label value="email">email :</label><br/>
                <input type="email" name="email"/>
              </div>
              <div class="upload3">
                <label value="password">password  :</label><br/>
                <input type="password" name="password"/>
              </div>
              <div class="upload3">
                <label value="address">address :</label><br/>
                <input type="text" name="address"/>
              </div>

            <div class="upload9">
                <button type="submit" class="btn btn-dark">upload</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
