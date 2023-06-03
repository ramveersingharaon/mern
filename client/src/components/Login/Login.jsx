import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

  const initialState = {
    email: "",
    password: ""
  }

  const [form, setForm] = useState(initialState);


  function onChangeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/user/login', form)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    console.log(form)
    setForm(initialState)
  }



  return (
    <div>
      <form>
        <input type="email" name='email' placeholder='email' onChange={onChangeHandler} value={form.email} />
        <input type="password" name='password' placeholder='password' onChange={onChangeHandler} value={form.password} />
      </form>
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Login
