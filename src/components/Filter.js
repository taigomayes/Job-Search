import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterButton } from './FilterButton';


const FilterBar = styled.div`

    width: 100vw;
    height: -30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: hsl(180, 29%, 50%);
    font-size: 12px;
    border-left: 1px solid hsl(180, 29%, 50%);
    border-right: 1px solid hsl(180, 29%, 50%);
    border-bottom: 1px solid hsl(180, 29%, 50%);
    border-radius: 0 0 10px 10px;
    position: fixed;
    top: 70px;
    z-index: 100;
    background: white;

    @media (max-width: 500px) {
    display: none;
  }
    

`

const ToggleButton = styled.button`
    width: 50px;
    height: 30px;
    background: hsl(180, 29%, 50%);
    position: fixed;
    z-index: 300;
    top: 15px;
    left: calc(50% + 120px);
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    display: block;
    
`


export const Filter = ({filter, setFilter}) => {


const [toggle, setToggle] = useState('none')

const toggleFilter = () => {
    if (toggle === 'none'){
        setToggle('flex')
    } else {
        setToggle('none')
    }
}

    return (
   
<>

<ToggleButton onClick={toggleFilter} >filter</ToggleButton>


        <FilterBar style={{ display: toggle }}>
            <FilterButton filter={filter} setFilter={setFilter} lang="HTML" />
            <FilterButton filter={filter} setFilter={setFilter} lang="CSS" />
            <FilterButton filter={filter} setFilter={setFilter} lang="JS" />
            <FilterButton filter={filter} setFilter={setFilter} lang="Python" />
            <FilterButton filter={filter} setFilter={setFilter} lang="Ruby" />
            <FilterButton filter={filter} setFilter={setFilter} lang="Sass" />
            <FilterButton filter={filter} setFilter={setFilter} lang="React" />
            <FilterButton filter={filter} setFilter={setFilter} lang="Vue" />
            <FilterButton filter={filter} setFilter={setFilter} lang="Django" />
            <FilterButton filter={filter} setFilter={setFilter} lang="RoR" />
        </FilterBar>



        
</>
 
    )

}