import './App.css'
import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from './Components/ThemeContext/ThemeContext'
import { useContext } from 'react'
import { 
          BrowserRouter as Router,
          Routes,
          Route} from 'react-router-dom'

import Header from '../src/Components/Header/index'
import MainContent from '../src/Components/MainContent/index'

function App() {
  const AppContext = useContext(ThemeContext)
  return (
    <AppContainer className={AppContext.theme}>
    <Router>
      <Header/>
        <ContentContainer>
        <Routes>
        <Route path= '/' element = {<MainContent />} />
        <Route path= '/region/:regionName' element = {<MainContent />} />
        </Routes>
        </ContentContainer>
    </Router>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const ContentContainer = styled.div`
    max-width: 1280px;
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0 12px;
`