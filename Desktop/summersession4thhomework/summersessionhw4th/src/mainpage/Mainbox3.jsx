import React from 'react'
import styled from "styled-components"
import { AiFillHeart } from "react-icons/ai";



function Mainbox3() {
    const Mainboxdiv3 = styled.div`

        display:flex;
        flex-direction: column;
        background-color: white;

        text-decoration: none;
        width:400px;
        height:450px;
        

    `
    const Mainboxdiv3img = styled.div`
      width:100%;
      height:215px;
    `
    const Mainboxdiv3body = styled.div`

      display:flex;
      flex-direction: column;

      width:100%;
      height:185px;
      
    `
    const Mainbox3title = styled.div`

            padding-left: 5px;


            font-size: 20px;
            font-weight: 600;
            width:100%;
            height:40px;

    `
    const Mainbox3summary = styled.div`
          padding-left: 5px;
          

          width:100%;
          height:115px;
          color:gray;
    `
    const Mainbox3date = styled.div`
            padding-left: 5px;
            
            display:flex;
            align-items: center;

            width:100%;
            height:30px;
            color:gray;
            font-size: 12px;

    `
    const Mainboxdiv3foot = styled.div`

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width:100%;
      height: 50px;
    `
    const Mainboxdiv3ftleft = styled.div`

            display:flex;
            flex-direction: row;


            width:200px;
            height:100%;

    `
    const Mainboxdiv3ftleft1 = styled.div`

            border-radius: 70%;
            overflow:hidden;
            width:45px;
            height: 100%;
            

    `
    const Mainboxdiv3ftleft2 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;
            color:gray;
            width:35px;

    `
    const Mainboxdiv3ftleft3 = styled.div`


            display:flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            width:110px;

    `          
    const Mainboxdiv3ftright = styled.div`

            display:flex;
            flex-direction: row;

            width: 80px;
            height: 100%;
    `
    const Mainboxdiv3ftright1 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 100%;
    `
    const Mainboxdiv3ftright2 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;
            color:gray;

            width: 40px;
            height: 100%;

    `
  return (
    <div>
        <Mainboxdiv3>
          <Mainboxdiv3img>
            <img src="https://i.ibb.co/cx9h9qY/1-9-2x-100.jpg" width="100%" height="100%"/>

          </Mainboxdiv3img>
          <Mainboxdiv3body>
            <Mainbox3title>
              {
                "노마드 코더 강의 내용 정리"
              }
            </Mainbox3title>
            <Mainbox3summary>
                {
                    "실전형 리액트 Hooks 10개"
                }<br></br>
                {
                    "Learn by Building 10 Hooks"
                }

            </Mainbox3summary>
            <Mainbox3date>
              {
                "2023년 7월 3일 ＊ 16개의 댓글"
              }
            </Mainbox3date>
            
          </Mainboxdiv3body>
          <Mainboxdiv3foot>
            <Mainboxdiv3ftleft>
              <Mainboxdiv3ftleft1>
              <img src="https://i.ibb.co/cx9h9qY/1-9-2x-100.jpg" width="100%" height="100%"/>

              </Mainboxdiv3ftleft1>

              <Mainboxdiv3ftleft2>
                {
                    "by"
                }
              </Mainboxdiv3ftleft2>
              <Mainboxdiv3ftleft3>
                {
                  "dhmr11"
                }
              </Mainboxdiv3ftleft3>
            </Mainboxdiv3ftleft>
            <Mainboxdiv3ftright>
              <Mainboxdiv3ftright1>
                <AiFillHeart fontSize={"25px"}/>
              </Mainboxdiv3ftright1>
              <Mainboxdiv3ftright2>
                {
                  "58"
                }
              </Mainboxdiv3ftright2>
            </Mainboxdiv3ftright>
          </Mainboxdiv3foot>

        </Mainboxdiv3>
    </div>
  )
}

export default Mainbox3