import React, { useState } from 'react'
import { ContainerDet } from './style'

const Determinant2 = () => {
    const [matrix, setMatrix] = useState([[1, 2], [3, 4]])
    const [res, setRes] = useState('')
    const Calc = () => {
        let Javob = (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
        let calcing = ''
        calcing += `<div>
            <div class="matrix2">
                <span>${matrix[0][0]}</span>
                <span>*</span>
                <span>*</span>
                <span>${matrix[1][1]}</span>
            </div>
        </div>`
        calcing += `- <div>
            <div class="matrix2">
                <span>*</span>
                <span>${matrix[0][1]}</span>
                <span>${matrix[1][0]}</span>
                <span>*</span>
            </div>
        </div>`
        calcing += `= <span>
                ${matrix[0][0] * matrix[1][1] > 0 ? matrix[0][0] * matrix[1][1] : `(${matrix[0][0] * matrix[1][1]})`}
                -
                ${matrix[0][1] * matrix[1][0] > 0 ?
                matrix[0][1] * matrix[1][0] : `(${matrix[0][1] * matrix[1][0]})`}
            </span> `
        calcing += `=<span class="last_res">${Javob}</span>`
        setRes(calcing)
    }
    const Tozalash = () => {
        setMatrix([[1, 2], [3, 4]])
        setRes('')
    }
    return (
        <ContainerDet>
            <div className='section'>
                <h2>Determinant 2x2</h2>
                <h3>Determinant elementlarini kiriting</h3>

                <div className="determinant">
                    <div className='input'>
                        <input
                            value={matrix[0][0]}
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
                            value={matrix[0][1]}
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
                            value={matrix[1][0]}
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
                            value={matrix[1][1]}
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
                        <div className='javob' dangerouslySetInnerHTML={{ __html: res }}>
                        </div>
                    </div>
                </div>
                <div className='option'>
                    <button onClick={Calc}>Hisoblash!</button>
                    <button onClick={Tozalash}>Tozalash!</button>
                </div>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: res }}></div> */}
        </ContainerDet >
    )
}

export default Determinant2