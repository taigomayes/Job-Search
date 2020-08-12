import React, { useState } from 'react';
import { jobs } from '../data'
import styled from 'styled-components'
import { Filter } from './Filter'



const New = styled.div`
    background: grey;
    width: 50px;
    height: 25px;
    color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`

const Featured = styled.div`
    background: black;
    width: 100px;
    height: 25px;
    border-radius: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const JobContainer = styled.div`

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    margin-top: 100px;
    z-index: 0;
    margin-bottom: 50px;


    @media (max-width: 1000px) {
    margin-top: 150px;
    }

    @media (max-width: 499px) {
    margin-top: 200px;
  }

    @media (max-width: 400px) {
    margin-top: 250px;
  }

`

const Job = styled.div`
    background: hsl(180, 29%, 50%);
    width: 250px;
    color: white;
    display: flex;
    margin: 50px 50px 0 50px;
    padding: 25px;
    border-radius: 10px;
    position: relative;
    z-index: 0;
  

   
`
const Info = styled.div`
    
    width: 250px;
    color: white;
    font-size: 12px;
   
`

const Tags = styled.div`
    
    width: 250px;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
   
`
const Tag = styled.div`

    width: 100px;
    height: 25px;
    color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    border: 1px solid white;
`

const Company = styled.div`
    
    width: 100%;
    height: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;


}
   
`
const Position = styled.div`
    
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;

   
`
const Details = styled.div`
    
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
   
`

const Detail = styled.div`

    width: 100px;
    height: 25px;
    color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`





const Search = styled.input`
    width: 500px;
    height: 50px;
    border: 1px solid hsl(180, 29%, 50%);
    border-radius: 10px;
    color: hsl(180, 29%, 50%);
    text-align: center;
    margin: 10px 0px 0px 0px;

    &:focus{
        outline: none;
    }
`


export const Jobs = ({ filter, term }) => {



    const filteredJobs = jobs.filter((job) => {

        const searchFilter = filter.join();
        
        
if (term === ''){


        if (filter.length === 0) {
            return job
        }

        if (filter.length > 0 && filter.some(r => job.tools.includes(r)) || filter.length > 0 && filter.some(r => job.languages.includes(r))) {

            return job
           
        } else return;

        
    } else if (job.position.toLowerCase().replace(' ', '').includes(term.toLowerCase().replace(' ', ''))){
        if (filter.length === 0) {
            return job
        }


        if (filter.length > 0 && filter.some(r => job.tools.includes(r)) || filter.length > 0 && filter.some(r => job.languages.includes(r))) {

            return job
           
        } else return;
        


    };


        
    });

    return (




        <JobContainer>
            {filteredJobs.map((jobs) => {
                return (


                    <Job key={jobs.id}>

                        <Info>


                            <Company>
                                {jobs.company}
{/*                                 {jobs.new && <New>new</New>}
                                {jobs.featured && <Featured>featured</Featured>} */}
                            </Company>
                            <Position>
                                {jobs.position}
                            </Position>


{/*                             <Details>
                                <Detail>{jobs.postedAt}</Detail>
                                <Detail>{jobs.contract}</Detail>
                                <Detail>{jobs.location}</Detail>
                            </Details> */}

                            <Tags>
                            {jobs.languages.map((languages, j) => <Tag key={j}>{languages}</Tag>)}
                            {jobs.tools.map((tools, j) => <Tag key={j}>{tools}</Tag>)}
                            </Tags>




                        </Info>


                    </Job>

               
                )
            })}
        </JobContainer>


    )
};

