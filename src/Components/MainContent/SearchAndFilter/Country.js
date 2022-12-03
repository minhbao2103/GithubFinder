import React from 'react'
import styled from 'styled-components'

function Country({data,info}) {
  return (
    <CountryCard>
    <div className='imageUser'>
        <img src={data.avatar_url} alt="" />
    </div>
    <CountryInfo>
        <h3>User: {!data.login ? 'Empty' : data.login}</h3>
        <div>Name: 
            <span> {!data.name ? 'Empty' : data.name} </span>
        </div>
        <div>Location:
            <span> {!data.location ? 'Empty' : data.location}</span>
        </div>
        <div>Blog:
            <span> {!data.blog ? 'Empty' : data.blog}</span>
        </div>
    </CountryInfo>
</CountryCard>
  )
}

export default Country


const CountryCard = styled.div`
    box-shadow: 0px 0px 4px 0px black;
    max-width: 420px;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 12px;
    user-select: none;
    filter: brightness(1);
    margin-top: 20px;
    &:hover {
        filter: brightness(0.8);
        cursor: pointer
    }
    &:hover img {
    transform: scale(1.1);
        cursor: pointer
    }

    .imageUser {
        width: 100%;
        height: 320px;
        display: block;
        overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        object-fit: cover
    }
    }
`

const CountryInfo = styled.div`
    padding: 10px 16px;

    h3 {
        margin: 4px 0px;
        font-size: 20px;
        font-weight: bold;
        height: 50px;
    }
    div {
        display: block;
        font-size: 16px;
        font-weight: 700;
        margin: 4px 0px;
    span {
        font-weight: 400
    }
    }
`