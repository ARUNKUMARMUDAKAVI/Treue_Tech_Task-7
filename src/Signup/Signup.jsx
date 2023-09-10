import axios from 'axios'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import Styles from './Signup.module.css'

export const Signup = () => {

  const history = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function data(e) {
    e.preventDefault();

    await axios.post("http://127.0.0.1:3000/signup", {
      firstName, lastName, email, password
    })
    .then(res => {
      if(res.data === "exist"){
        alert("User already exist")
      }//
      else if(res.data === "notexist"){
        history("/")
      }
    })
    .catch(e => {
      console.log(e);
    })
  }



  return (
    <>
      <form onSubmit={(e) => data(e)}>
        <center>
        <section className={Styles.container}>
          <span>Sign Up</span>
          <input type="text" onChange={(e) => { setfirstName(e.target.value)}} placeholder='Enter First Name' />
          <input type="text" onChange={(e) => { setlastName(e.target.value)}} placeholder='Enter Last Name' />
          <input type="email" onChange={(e) => { setEmail(e.target.value)}} placeholder='Enter Your Email' />
          <input type="password" placeholder='Enter Password' name="pwd" id="pwd"/>
          <input type="password" onChange={(e) => { setPassword(e.target.value)}} placeholder='Enter Confirm Password' name="cpwd" id="cpwd" />
          <button className={Styles.btnSubmit} type="submit">Sign Up</button>
          <NavLink to='/login'>Already hava an Account? Login.</NavLink>
        </section>
        </center>
      </form>
    </>
  )
}
