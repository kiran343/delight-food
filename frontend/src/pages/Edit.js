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
        const price=form.price.value;
        const foodtype=form.foodtype.value;
        const title=form.title.value;
        const des=form.des.value;
        const productObj={img,price,des,foodtype,title};
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
<div class="shyer">
<form onSubmit={handleUpdate}>
    <h2>EDIT</h2>
    <div class="update0">
        <lable value={productData.title}>Title</lable><br/>
        <input type='text'placeholder="title" name='title' defaultValue={productData.title} className='ms-3'/>
    </div>
    <div class="update1">
        <lable value={productData.img}>Images</lable><br/>
        <input type='text'placeholder="url" name='img' defaultValue={productData.img} className='ms-3'/>
    </div>
    <div class="update2">
        <lable value={productData.des}>Description</lable><br/>
        <input type='text'placeholder="description" name='des' defaultValue={productData.des} className='ms-3'/>
    </div>
    <div class="update3">
        <lable value={productData.price}>Price</lable><br/>
        <input type='text'placeholder="price" name='price' defaultValue={productData.price} className='ms-3'/>
    </div>
    <div class="update4">
        <lable value={productData.foodtype}>Foodtype</lable><br/>
        <input type='text'placeholder="foodtype" name='foodtype' defaultValue={productData.foodtype} className='ms-3'/>
    </div>
       <section className='update8'>
        <button type="submit" class="btn btn-dark">UPDATE</button>
       </section>

</form>

</div>
    </div>
  )
}

export default Edit