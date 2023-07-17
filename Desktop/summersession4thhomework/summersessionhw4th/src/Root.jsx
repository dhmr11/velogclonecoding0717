import { Outlet } from "react-router-dom";
import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme,darkTheme,GlobalStyles } from "./Theme";
import styled from "styled-components";
import {FaSun} from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

// import './btn.css'



function Root(){

    const [theme,setTheme] = useState("light");
    const themeToggler = () =>{
        theme === "light" ? setTheme("dark") : setTheme("light");
        };
    const Fasundiv = styled.div`
        position: relative;
        left:1000px;
        top:50px;
        width:30px;
    `

    return(
        <ThemeProvider theme={theme==="light" ? lightTheme: darkTheme}>
            <GlobalStyles/>
                <Fasundiv><BsFillSunFill onClick={()=>themeToggler()} fontSize={"25px"}/></Fasundiv>
            <Outlet/>
        </ThemeProvider>
    )

        
    }


export default Root;