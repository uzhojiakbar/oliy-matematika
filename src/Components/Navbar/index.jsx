import React, { useState } from 'react'
import { Links, Logo, NavContainer, Select } from './style'
import logo from '../../Assets/logo/my-logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { NavbarMock } from '../../Mock/navbar'

const Navbar = () => {
    const Navigate = useNavigate()

    const [slc, setSlc] = useState(null)
    const [open, setOpen] = useState(false)
    return (
        <NavContainer>
            <Logo onClick={() => Navigate('/')}>
                <img src={logo} alt="" />
            </Logo>
            <Links>
                {/* <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={'./determinant'} >
                    Determinant
                </NavLink> */}
                {
                    NavbarMock.map(v => {
                        return v.child && <Select key={v.id} onClick={() => setOpen(!open)}>
                            {v.title} {slc === null ? "" : v.child[slc - 1].title}
                            <i className='fa-solid fa-caret-down' ></i>
                            {
                                open && <div className='options'>
                                    {
                                        v.child.map((valueChild, i) => {
                                            return <div key={i} onClick={() => setSlc(valueChild.id)} className='option'>
                                                <NavLink className={({ isActive }) => isActive ? 'active link' : 'link'} to={valueChild.path} >
                                                    {valueChild.title}
                                                </NavLink>

                                            </div>
                                        })
                                    }
                                </div>
                            }
                        </Select>
                    })
                }

            </Links>
        </NavContainer >
    )
}

export default Navbar