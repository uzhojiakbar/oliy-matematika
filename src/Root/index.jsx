import React from 'react'
import './style.css'
import { MainRoot } from './style'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NavbarMock } from '../Mock/navbar'
const Root = () => {
    return (
        <MainRoot>
            <Navbar />
            {
                NavbarMock.map((v) => {
                    return <Routes key={v.id}>
                        {v.child && v.child.map((value) => {
                            return <Route key={value.id} path={value.path} element={value.element} />
                        })}
                    </Routes>
                })
            }

        </MainRoot >
    )
}

export default Root