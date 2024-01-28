import React, { useEffect, useState } from 'react'
import { Body, ContainerDet, Inputs, Main, Title, Res, } from './style'
import parse from 'html-react-parser'

const Determinant = ({ type }) => {
    const [det, setDet] = useState([]
    )

    const [res, setRes] = useState([
        0, ''
    ])
    useEffect(() => {
        if (type === '2x2') {
            setDet([
                0, 0, 0, 0,
            ])
        } else if (type === '3x3') {
            setDet([
                0, 0, 0,
                0, 0, 0,
                0, 0, 0
            ])
        } else if (type === '4x4') {
            setDet([
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0
            ])
        }
    }, [type])
    console.log(det);

    const Calcing = () => {
        if (type === '2x2') {
            let res = 0;
            res = (det[0] * det[3]) - (det[1] * det[2])
            let restext = `
                <span>=</span>
                <div class="det2">
                    <span>${det[0]}</span>
                    <span>*</span>
                    <span>*</span>
                    <span>${det[3]}</span>
                </div> 
                <span>-</span>
                <div class="det2">
                    <span>*</span>
                    <span>${det[1]}</span>
                    <span>${det[2]}</span>
                    <span>*</span>
                </div> 
                <span>=</span>
                <span>(${(det[0] * det[3])} - ${(det[1] * det[2])}}</span>
                <span>=</span>
                <span>${res}</span>
            `
            setRes([res[0], restext])
            return res
        }
    }

    return <ContainerDet>
        <Main>
            <Title>{type} Determinat elementlarini kiriting</Title>

            <Body>
                <Inputs type={type}>
                    {
                        det.map((v, i) => {
                            return <input
                                onChange={(e) => {
                                    let now = [
                                        ...det
                                    ]
                                    now[i] = e.target.value
                                    setDet(now)
                                }}
                                value={v}
                                type='number' />
                        })
                    }
                </Inputs>
                <Res>
                    <button onClick={Calcing}>click</button>
                    {parse(res[1])} {' '}
                    {
                    }
                </Res>
            </Body>
        </Main>
    </ContainerDet>
}

export default Determinant