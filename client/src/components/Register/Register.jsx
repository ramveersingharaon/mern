import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {

  const initialState = {
    name:"",
    email:"",
    password:""
  }

  const [form,setForm]= useState(initialState);


  function onChangeHandler(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }

 function submitHandler(e) {
    e.preventDefault()


 axios.post('http://localhost:5000/user/register',form).then((res)=>{
console.log(res)

 }).catch((er)=>{
console.log(er)
 })

 
 
  
  
  

    setForm(initialState)
  }
  return (
    <div>
      <form>
        <input type="text" name='name' placeholder='Name' onChange={onChangeHandler}  value={form.name}/>
        <input type="email" name='email' placeholder='email' onChange={onChangeHandler} value={form.email} />
        <input type="password" name='password' placeholder='password' onChange={onChangeHandler}  value={form.password}/>
      </form>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Register
