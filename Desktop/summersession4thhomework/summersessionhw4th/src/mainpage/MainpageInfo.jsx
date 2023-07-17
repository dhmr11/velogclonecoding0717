import React from 'react'
import styled from "styled-components"
import { BsGraphUp,BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";




function MainpageInfo() {


    const Infodiv =styled.div`
        
        display:flex;
        justify-content: center;
        align-items: end;

        height:180px;
        width:100%;
        
    `

    const MainpageInfoCtn = styled.div`

        display:flex;
        justify-content: space-between;
        height:60px;
        width:90%;

    `
    const MainpageInfoCtnleft =styled.div`

      display: flex;
      flex-direction: row;

      width:405px;
    `
    const MainpageInfoCtnright=styled.div`

        display:flex;
        justify-content: end;
        align-items: center;

        width:90px;
        height:100%;
        
      `
    
  const MainpageInfo1 = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

    gap:10px;
    width:135px;
    height:100%;
  `
  const MainpageInfo2 = styled.div`

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;
      color:grey;
      gap:10px;

      width:135px;
      height:100%;
  `
  const MainpageInfo3 = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    
    gap:10px;
    width:135px;
    height:100%;
  `
  const MainpageInfo3ctn = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:10px;
    border-radius: 8px;

    background-color: white;
    width:95%;
    height: 80%;
  `

  return (
    <Infodiv>        
        <MainpageInfoCtn>
          <MainpageInfoCtnleft>
            <MainpageInfo1>
              <BsGraphUp/>
              {
                "트렌딩"
              }
            </MainpageInfo1>
            <MainpageInfo2>
              <AiOutlineClockCircle/>
              {
                "최신"
              }
            </MainpageInfo2>
            <MainpageInfo3>
              <MainpageInfo3ctn>
                {
                  "이번 주"
                }
                <RiArrowDownSFill/>
              </MainpageInfo3ctn>
            </MainpageInfo3>
          </MainpageInfoCtnleft>
          <MainpageInfoCtnright>
            <BsThreeDotsVertical style={{color:"grey"}}/>
          </MainpageInfoCtnright>
        </MainpageInfoCtn>
    </Infodiv>
  )
}

export default MainpageInfo