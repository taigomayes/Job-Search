import React, { useState } from 'react';
import styled from 'styled-components';


const Button = styled.div`
    width: 50px;
    height: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 10px 25px;
    padding: 10px 0;
    
    &:hover{
        background: hsl(180, 29%, 50%);
        color: white;
    }
 
`
export const FilterButton = ({ lang, filter, setFilter }) => {

    const [background, setBackground] = useState('none')
    const [color, setColor] = useState('hsl(180, 29%, 50%)')

    const onButtonClick = () => {

        if (background === 'none'){ 
            setBackground("hsl(180, 29%, 50%)")
            setColor("white")
            setFilter(filter => [...filter, lang])
            console.log(filter)

        } else {
            setBackground("none")
            setColor("hsl(180, 29%, 50%)")
            setFilter(filter.filter(e => (e !== lang) ))
            console.log(filter)
        }

        

    }

    return (
        <Button style={{background:background, color: color}} onClick={onButtonClick} >{lang}</Button>

    )
}