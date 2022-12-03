import React, { useEffect, useState} from 'react'
import { useRef } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import { useContext } from 'react'
import '../../App.css'

import {BsMoonFill} from 'react-icons/bs'
import {BsSunFill} from 'react-icons/bs'
import styles from './SwitchStyles.module.scss'

function SwitchMode() {
    const refInput = useRef(50)
    const refCircle = useRef()
    const refToggle = useRef()
    const [isDark,setIsDark] = useState(true)
    const context = useContext(ThemeContext)
  

    useEffect(() => {
      refInput.current.checked = isDark
    },[isDark])

      // useEffect(() => {
      //   const changeBackgroundBtn = () => {
      //     if(isDark){
      //       refCircle.current.style.background = 'white'
      //     }else {
      //       refCircle.current.style.background = 'white'
      //     }
      //   }
      //   changeBackgroundBtn()
      // },[isDark])
    const handleToggle = () => {
          refInput.current.checked = !refInput.current.checked
          setIsDark(refInput.current.checked)
          context.toggleTheme()
    }
  return (
    <div className={styles.toggleButton} ref={refToggle} onClick= {handleToggle}>
        <input type={`checkbox`} className={styles.Input} ref={refInput}/>
        <div className={styles.Icon}>
          {
            (isDark) ? <BsMoonFill/> : <BsSunFill style={{color:'yellow'}}/>
          }
        </div>
        <div className={styles.Circle} ref={refCircle}></div>
    </div>
  )
}

export default SwitchMode