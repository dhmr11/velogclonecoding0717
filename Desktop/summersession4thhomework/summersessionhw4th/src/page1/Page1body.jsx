import styled from "styled-components";
import React from 'react'

function Page1body() {
    const Page1Ctnwrapper = styled.div`
        
        display:flex;
        justify-content: center;
    `
    const Page1Ctn = styled.div`
        width:50%;
    `
    const Blank = styled.div`      
        

    width:100%;
    height: 100px;

`
    const Page1title = styled.div`
       

        display:flex;
        align-items: center;
        font-size: 40px;
        font-weight: 600;

        height:200px;
        width:100%;
    `
        const Page1info = styled.div`
        

        display: flex;
        flex-direction: row;
        align-items: center;

        height:100px;
        width:100%;


    `
        const Page1infoid = styled.div`


        display:flex;
        justify-content: center;
        align-items: center;
        font-weight:600 ;
        height:15px;
        width:120px;
    `
        const Page1infodate = styled.div`

        display:flex;
        justify-content: center;
        align-items: center;
        color:gray;
        height:15px;
        width:180px;
    `
    const Review = styled.div`
        width:100%;
        height:200px;
        background-color: #e8ecf0;
        border-radius: 8px;
    `

  return (
    <div>
        <Page1Ctnwrapper>
            <Page1Ctn>
                <Blank/>
                <Page1title>
                    {
                        "Styled-Component 내용 정리"
                    }
                </Page1title>
                <Page1info>
                    <Page1infoid>
                        {
                            "lingodingo"
                        }
                    </Page1infoid>
                    <Page1infodate>
                        {
                            "2023년7월4일"
                        }
                    </Page1infodate>
                </Page1info>
                <Review>

                </Review>
            </Page1Ctn>
        </Page1Ctnwrapper>


    </div>
  )
}

export default Page1body