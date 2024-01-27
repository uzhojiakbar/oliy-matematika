import React from 'react'
import Determinant from '../../Components/Determinant'
import { DeterminantPageDesign } from './style'

const DeterminantPage = () => {
    return (
        <DeterminantPageDesign>
            <Determinant type={"2x2"} />
            {/* <Determinant type={"3x3"} /> */}
        </DeterminantPageDesign>
    )
}

export default DeterminantPage