import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Styles from './Login.module.css'

export const Login = () => {

  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function data(e) {
    e.preventDefault();

    await axios.post("http://127.0.0.1:3000/login", {
      email, password
    })
    .then(res => {
      if(res.data === "exist"){
        history("/logedin")
      }//if(res.data == "notexist")
      else {
        alert("User Doesn't Exist or Enter Valid Input.")
      }
    })
    .catch(e => {
      alert("wrong details")
      console.log(e);
    })
  }

  return (
    <>
    <form onSubmit={(e) => data(e)}>
      <center>
      <section className={Styles.container}>
        <span>Log In</span>
        <input type="email" onChange={(e) => { setEmail(e.target.value)}} placeholder='Enter Your Email'/>
        <input type="password" onChange={(e) => { setPassword(e.target.value)}} name="pwd" id="pwd" placeholder='Enter Your Password' />
        <button className={Styles.btnSubmit} type="submit">Login</button>
        <NavLink to='/signup'>Don't have an Account? Sign Up.</NavLink>       
      </section>
      </center>
      </form>
    </>
  )
}
