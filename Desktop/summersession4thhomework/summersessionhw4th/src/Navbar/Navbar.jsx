import React,{useState} from 'react'
import styled from "styled-components"
import { Navbar2345e, NavbarContainer, Navbarfirste } from './Navbarstyle'
import {FaSun,FaSearch} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiArrowDownSFill } from "react-icons/ri";
import {Link} from "react-router-dom";
import { BsFillSunFill } from "react-icons/bs";





const Nav = styled.nav`
    

    display:flex;
    justify-content: center;

    width:100%;
    height:64px;
    
`

const Navbar = () => {

    const Navbar2 = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid black;
        border-radius: 14px;
        width:120px;
        height: 30px;
        font-weight: 600;
        font-size: 18px;
    `


  return (
    <>  
        
                <Nav>
                    <NavbarContainer>


                        <Navbarfirste>
                            {
                                "velog"
                            }
                        </Navbarfirste>
                        <Navbar2345e>
                            <FaSearch/>
                            <Navbar2>                            
                                
                                {
                                    "새 글 작성"
                                }
                            </Navbar2>
                            <CgProfile style={{color:"grey" }} fontSize={"40px"}/>
                            <RiArrowDownSFill />
                        </Navbar2345e>
                        

                    </NavbarContainer>
                

            </Nav>
    </>
  )
}

export default Navbar