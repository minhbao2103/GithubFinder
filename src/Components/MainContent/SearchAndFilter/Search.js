import React from 'react'
import { useState } from 'react'

import {MdSearch} from 'react-icons/md'
import styled from 'styled-components'
import Country from './Country'

function Search() {
  const [data, setData] = useState({})
  const [username,setUsername] = useState("")
  const [info,setInfo] = useState([])

  const handleOnChange = (e) => {
    setUsername(e.target.value)
  }
  const handleSubmit = async (e) => {
      e.preventDefault()
    const user = await fetch(` https://api.github.com/users/${username}`)
    const userJson = await user.json()
    console.log(userJson)
    const info = await fetch(userJson.repos_url)  
    const infoJson = await info.json()
    console.log(infoJson)
    if(userJson){
      setData(userJson)
      setInfo(infoJson)
    }
  }
  return (
    <SearchPane>
    <h3>Search User:</h3>
    <SearchElement>
        <input type='text' 
               placeholder='Input the and enter to search...'
               onChange={handleOnChange}
               value={username}
               />
        <div style={{width:'40px',height:'100%'}}>
            <MdSearch className={`icon`} 
                      type={`submit`}
                      onClick={handleSubmit}/>
          </div>
    </SearchElement>
          <Country data={data} info={info}/>
    </SearchPane>
  )
}

export default Search

const SearchPane = styled.div`
    max-width: 320px;
    width: 100%;
    margin-top: 20px;
    margin: 0 400px;

    h3 {
      font-size: 18px;
      font-weight:600;
      
    }
`

const SearchElement = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 34px;
    box-shadow: 0px 0px 4px 0px black;
    border-radius: 4px;
    overflow: hidden;
    background: white;

    input {
      border: none;
      outline: none;
      font-weight: 500;
      margin: 0 8px;
      width: 100%;
    }

    .icon {
      height: 100%;
      width: 100%;
      padding: 2px;
      text-align: center;
      background: #989898;
      opacity :65%;
      transition: opacity 0.2s linear;
      &:hover {
        opacity:1;
        cursor: pointer;
      }
    }
`