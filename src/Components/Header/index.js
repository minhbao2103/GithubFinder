import SwitchMode from '../../Components/Header/SwitchMode'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { useContext } from 'react'
import '../../App.css'

import styled from 'styled-components'
import React from 'react'

function Header() {
  const headerContext = useContext(ThemeContext)
  return (
    <HeaderPane className={headerContext.theme}>
       <span style={{fontSize:'18px'}}>Github Finder</span>
       <SwitchMode />
    </HeaderPane>
  )
}

export default Header

const HeaderPane = styled.div`
      height: 8vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:0px 200px;
      font-weight:bold;
      box-shadow: 0px 0px 12px 0px #2b3945;
      z-index: 10;
`

