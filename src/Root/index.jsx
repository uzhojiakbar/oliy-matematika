import React from 'react'
import './style.css'
import { MainRoot } from './style'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import DeterminantPage from '../Pages/Determinant'
const Root = () => {
    return (
        <MainRoot>
            <Navbar />

            <Routes>
                <Route path='determinant' element={<DeterminantPage />} />
            </Routes>
        </MainRoot>
    )
}

export default Root