import React from 'react'
import { Links, Logo, NavContainer } from './style'
import logo from '../../Assets/logo/my-logo.jpg'
import { NavLink, Route } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavContainer>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <Links>
                <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={'./determinant'} >
                    Determinant
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={'./determinant1'} >
                    Determinant
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={'./determinant2'} >
                    Determinant
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={'./determinant3'} >
                    Determinant
                </NavLink>
            </Links>
            <div></div>
        </NavContainer>
    )
}

export default Navbar