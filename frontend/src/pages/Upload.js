import React from "react";
import { toast, ToastContainer } from "react-toastify";
import './Upload.css'

const Upload = () => {
  const handleSubmit = (event) => {
    event.presentDefault();
    const from = event.target;
    const tittle = from.tittle.value;
    const img = from.img.vale;
    const des = from.des.value;
    const price = from.price.value;
    const food = from.food.value;
    const quantity = 1;
    if (
      tittle === "" ||
      img === "" ||
      price === "" ||
      des === "" ||
      food === "" ||
      quantity === ""
    ) {
      toast.warn("fill the required fields");
    }
    const foodObj = { tittle, img, price, des, food, quantity };
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
        from.reset();
        window.location.href = "/admain";
      });
  };
  return (
    <div>
      <ToastContainer />
      <div class="card upload6">
        <div class="card-body upload5">
          <from on submit={handleSubmit}>
            <h2>UPLOAD</h2>
            <div class="upload0">
              <label value="tittle">tittle :</label>
              <input type="text" name="tittle"/>
              <div class="upload1">
                <label value="img">Img :</label>
                <input type="text" name="img" />
              </div>
              <div class="upload2">
                <label value="des">des :</label>
                <input type="text" name="des"/>
              </div>
              <div class="upload3">
                <label value="price">price :</label>
                <input type="text" name="price"/>
              </div>
              <div class="upload4">
                <label value="food">food :</label>
                <input type="text" name="food"/>
              </div>
            <div class="upload9">
                <button type="submit" class="btn btn-dark">upload</button>
            </div>
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Upload;
