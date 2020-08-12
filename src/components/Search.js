import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
    background: white; 
    width: 200px;
    height: 25px;
    position: fixed;
    top: 15px;
    z-index: 300;
    border: 1px solid hsl(180, 29%, 50%);
    border-radius: 10px;
    text-align: center;
    color: hsl(180, 29%, 50%);
    font-size: 12px;

    &:focus{
        outline: none;
    }
`

export const Search = ({ term, setTerm }) => {



    const onChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <SearchBar value={term} onChange={onChange}/>
    )
}