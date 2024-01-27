import React from 'react'
import { Links, Logo, NavContainer } from './style'
import logo from '../../Assets/logo/my-logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const Navigate = useNavigate()

    return (
        <NavContainer>
            <Logo onClick={() => Navigate('/')}>
                <img src={logo} alt="" />
            </Logo>
            <Links>
                <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={'./determinant'} >
                    Determinant
                </NavLink>
            </Links>
        </NavContainer>
    )
}

export default Navbar