import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Header.module.css'


export const Header = () => {
  return (
    <>
      <header className={Styles.container}>
        <ul className={Styles.items}>
          <li>
            <NavLink className={Styles.navItem} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={Styles.navItem} to='/login'>Log In</NavLink>
          </li>
          <li>
            <NavLink className={Styles.navItem} to='/signup'>Sign Up</NavLink>
          </li>
        </ul>
      </header>
    </>
  )
}
