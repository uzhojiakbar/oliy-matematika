import React, { useState } from 'react'
import { ContainerDet } from './style'

const Determinant2 = () => {
    const [matrix, setMatrix] = useState([[1, 2], [3, 4]])
    const [res, setRes] = useState('')
    const Calc = () => {
        let Javob = (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])

        let rrr = `(${(matrix[0][0])} * ${matrix[1][1]}) - (${(matrix[0][1])} * ${matrix[1][0]})`
        rrr += `=(${(matrix[0][0] * matrix[1][1])} - ${matrix[0][1] * matrix[1][0]})`
        rrr += `=${Javob}`
        setRes(rrr)
    }
    return (
        <ContainerDet>
            <h2>Determinant 2x2</h2>
            <h3>Determinant elementlarini kiriting</h3>

            <div className="determinant">
                <div className='input'>
                    <input
                        defaultValue={matrix[0][0]}
                        onChange={
                            (e) =>
                                setMatrix(
                                    [
                                        [Number(e.target.value) ? Number(e.target.value) : 0, matrix[0][1]],
                                        [matrix[1][0], matrix[1][1]]
                                    ])
                        } id='1' type="number"
                    />
                    <input
                        defaultValue={matrix[0][1]}
                        onChange={
                            (e) =>
                                setMatrix(
                                    [
                                        [matrix[0][0], Number(e.target.value) ? Number(e.target.value) : 0],
                                        [matrix[1][0], matrix[1][1]]
                                    ])
                        } id='1' type="number"
                    />
                    <input
                        defaultValue={matrix[1][0]}
                        onChange={
                            (e) =>
                                setMatrix(
                                    [
                                        [matrix[0][0], matrix[0][1]],
                                        [Number(e.target.value) ? Number(e.target.value) : 0, matrix[1][1]]
                                    ])
                        } id='1' type="number"
                    />
                    <input
                        defaultValue={matrix[1][1]}
                        onChange={
                            (e) =>
                                setMatrix(
                                    [
                                        [matrix[0][0], matrix[0][1]],
                                        [matrix[1][0], Number(e.target.value) ? Number(e.target.value) : 0]
                                    ])
                        } id='1' type="number"
                    />
                </div>
                <div className='output'>
                    <div>=</div>
                    <div>
                        {res}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={Calc}>calc</button>
            </div>
        </ContainerDet>
    )
}

export default Determinant2