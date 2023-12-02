import React from 'react'
import './style.css'
import { MainRoot } from './style'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Determinant2 from '../Components/Determinant2'
const Root = () => {
    return (
        <MainRoot>
            <Navbar />

            <Routes>
                <Route path='determinant' element={<Determinant2 />} />
            </Routes>
        </MainRoot>
    )
}

export default Root