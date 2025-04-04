import React from "react";
import { toast, ToastContainer } from "react-toastify";
import './Upload.css'

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form =event.target;
    const title = form.title.value;
    const img = form.img.value;
    const des = form.des.value;
    const price = form.price.value;
    const foodtype = form.foodtype.value;

    if (
      title === "" ||
      img === "" ||
      des === "" ||
      price === "" ||
      foodtype === "" 
    ) {
      toast.warn("fill the required fields");
      console.log("fill the required fields")
    }
    const foodObj = {title,img,des,price,foodtype};
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
              <label value="title">title :</label><br/>
              <input type="text" name="title"/>
              <div class="upload1">
                <label value="img">img :</label><br/>
                <input type="text" name="img" />
              </div>
              <div class="upload2">
                <label value="des">des :</label><br/>
                <input type="text" name="des"/>
              </div>
              <div class="upload3">
                <label value="price">price  :</label><br/>
                <input type="text" name="price"/>
              </div>
              <div class="upload4">
                <label value="foodtype">foodtype  :</label><br/>
                <input type="text" name="foodtype"/>
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
