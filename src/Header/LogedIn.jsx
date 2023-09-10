import React from 'react'
import Styles from './LogedIn.module.css'
import { NavLink } from 'react-router-dom'
import {Head} from '../Open/main'

export const LogedIn = () => {
  return (
    <>
      <header className={Styles.container}>
        <ul className={Styles.items}>
          <li>
            <NavLink className={Styles.navItem} to='#'>Home</NavLink>
          </li>
          <li>
            <NavLink className={Styles.navItem} to='/'>Logut</NavLink>
          </li>
        </ul>
      </header>
      <Head/>
    </>
  )
}
