import React, { useEffect, useState } from 'react'
import { Form, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import './Edit.css'

const Edit = () => {
    const {id}=useParams();
    const [productData,setProductsData]= useState({
        name:"",
        des:"",
        price:"",
        img:"",
        foodtype:"",
        title:"",

    });
    useEffect(()=>{
        fetch(`http://localhost:5002/fooding/${id}`)
        .then ((res)=>res.json())
        .then ((data)=>setProductsData(data));
    });
    const handleUpdate=(event)=>{
        event.preventDefault();
        const form=event.target;
        const img=form.img.value;
        const des=form.des.value;
        const price=form.price.value;
        const foodtype=form.foodtype.value;
        const title=form.title.value;
        const productObj={img,des,price,foodtype,title};
        console.log(productObj);
        fetch(`http://localhost:5002/allproducts/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
        },
      body:JSON.stringify(productObj),
    })
    .then ((res)=>res.json())
    .then ((data)=>{
        toast.success("product updated successfully");
        window.location.href='/update';

    });
    }
  return (
    <div>
<ToastContainer/>
<form onSubmit={handleUpdate}>
    <h2>EDIT</h2>
    <div class="update0">
        <lable value={productData.title}>title</lable>
        <input type='text' name='title' defaultValue={productData.title} className='ms-3'/>
    </div>
    <div class="update1">
        <lable value={productData.img}>img</lable>
        <input type='text' name='img' defaultValue={productData.img} className='ms-3'/>
    </div>
    <div class="update2">
        <lable value={productData.des}>Description</lable>
        <input type='text' name='description' defaultValue={productData.description} className='ms-3'/>
    </div>
    <div class="update3">
        <lable value={productData.price}>price</lable>
        <input type='text' name='price' defaultValue={productData.price} className='ms-3'/>
    </div>
    <div class="update4">
        <lable value={productData.foodtype}>foodtype</lable>
        <input type='text' name='foodtype' defaultValue={productData.foodtype} className='ms-3'/>
    </div>
       <section className='update8'>
        <button type="submit" class="btn btn-primary">UPDATE</button>
       </section>

</form>


    </div>
  )
}

export default Edit