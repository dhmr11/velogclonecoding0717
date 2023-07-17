import React from 'react'
import styled from "styled-components"
import Navbar from '../Navbar/Navbar'
import MainpageInfo from './MainpageInfo'
import MainpageBody from './MainpageBody'    


function Mainpage() {
    const Maindiv = styled.div`
        
        width:100%;
    `
  return (
    <Maindiv>
        <Navbar/>        
        <MainpageInfo/>
        <MainpageBody/>
    </Maindiv>
  )
}

export default Mainpage