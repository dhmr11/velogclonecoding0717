import React from 'react'
import styled from "styled-components"
import Mainbox1 from './Mainbox1'
import {Link} from "react-router-dom";
import Mainbox2 from './Mainbox2';
import Mainbox3 from './Mainbox3';



function MainpageBody() {
    const MainpageBody = styled.div`
        
        display: flex;
        justify-content: center;
        align-items: center;

        gap:75px;
        width:100%;
        height: 550px;
        
    `
  return (
    <div>
        <MainpageBody>
            <Link to={"/Page1"}style={{ textDecoration: "none",color:"inherit"}}><Mainbox1/></Link>
            <Link to={"/Page2"}style={{ textDecoration: "none",color:"inherit"}}><Mainbox2/></Link>
            <Link to={"/Page3"}style={{ textDecoration: "none",color:"inherit"}}><Mainbox3/></Link>
        </MainpageBody>    
    </div>
  )
}

export default MainpageBody