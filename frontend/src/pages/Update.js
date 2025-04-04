import React, { use, useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Update.css'

const Update = () => {
    const [productItems,setProductsItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5002/get')
        .then ((res) =>res.json())
        .then ((data)=>
            setProductsItems(data))
        console.log(productItems);
        
    },[])

    const DeleteItems=(id)=>{
      fetch(`http://localhost:5002/food/${id}`,{
      method:"DELETE",
    })

    .then ((res)=>res.json())
    .then ((data)=>{
        toast.error("deleted successfully");
        setProductsItems(prevProductItems => prevProductItems.filter((Item)=>Item._id!==id))
    })
}
  return (
    <div>
       <div className='card.table2'>
        <div className='card-body'>
            <table className='table1'>

                    <tr>
                        <th>tittle</th>
                        <th>img</th>
                        <th>des</th>
                        <th>price</th>
                        <th>foodtype</th>
                        
                    </tr>
                    {productItems.map((item)=>(
                    <tr key={item._id}>
                         <td>{item.title}</td>
                        <td><img src={item.img}style={{width:'50px',height:'10vh'}}/></td>
                        <td>{item.des}</td>
                        <td>{item.price}</td>
                        <td>{item.foodtype}</td>
                        

                        <td><button className='table3' placeholder='delete'onClick={()=> DeleteItems(item._id)}> Delete </button></td>
                        {/* <td><button className='table4' placeholder='edit'onClick={()=> Edit(item._id)}>Edit</button></td> */}
                    </tr>
                   
                    )
                )}

               
            </table>
        </div>
       </div>
    </div>
  )
}

export default Update;