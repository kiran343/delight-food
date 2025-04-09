import React, { useState } from 'react'

const Form = () => {
    const [form,setFrom]=useState({
        username:"",
        email:"",
        password:"",
    })
    const[error,setErrer]=useState({})
    const validation=()=>{
        const newError={}
        if(!form.username)newError.username="invalid usernsme";
        if(!form.email)newError.email="invalid email";

        else
        if(!/S+@\S+\.\S+/.test(from.email))newError.email="missing error";
        if(!form.password)newError.password="invaild password";
        else

        if(form.password.length<6)newError.password="must be 6 character";
        if(!/[a-z]/.test(form.password)) newError.password="must one lowercase";
        if(!/[A-Z]/.test(form.password)) newError.password="must one upper lowercase";
        if(!/[!@#$%&*?]/.test(form.password)) newError.password="must one in special character";
    }
    return newError;
}
        const handlechange=(event)=>{
            const {name,value}=event.forget;
            setFrom({
                ...form,
                [name]:value,
            })
        }
        const handleSubmit=(event)=>{
            event.preventDefault();
            const validationerror=validation();
            if(Object.keys(validationerror).length===0)
            {
                console.log("form valid",form)
                window.location.href="/sweet"
                setForm({
                    username:"",
                    email:"",
                    password:"",
                })
                setError({});
            }
            else
            setError(validation());
            
        


  return (
    <div>
 <form onSubmit={handleSubmit}>
        <div className='form1'>
            <label>Username</label>
            <input type='text' name='username' onChange={handlechange} value={form.username}/>
            {error.username&&<p>{error.username}</p>}
        </div>
       < div className='form2'>
            <label>Email</label>
            <input type='text' name='email' onChange={handlechange} value={form.email}/>
            {error.email&&<p>{error.email}</p>}
        </div>
        < div className='form3'>
            <label>Password</label>
            <input type='text' name='password' onChange={handlechange} value={form.password}/>
            {error.password&&<p>{error.password}</p>}
        </div>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Form