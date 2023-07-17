import styled from "styled-components";
import React from 'react'
import Navbartohome from "../Navbartohome/Navbartohome";

function Page2body() {
    const Page2Ctnwrapper = styled.div`
        
        display:flex;
        justify-content: center;
    `
    const Page2Ctn = styled.div`
        width:50%;
    `
    const Blank = styled.div`      
        

    width:100%;
    height: 100px;
`
    const Page2title = styled.div`
       

        display:flex;
        align-items: center;
        font-size: 50px;
        font-weight: 600;

        height:200px;
        width:100%;
    `
        const Page2info = styled.div`
        

        display: flex;
        flex-direction: row;
        align-items: center;

        height:100px;
        width:100%;


    `
        const Page2infoid = styled.div`


        display:flex;
        justify-content: center;
        align-items: center;
        font-weight:600 ;
        height:15px;
        width:120px;
    `
        const Page2infodate = styled.div`

        display:flex;
        justify-content: center;
        align-items: center;
        color:gray;
        height:15px;
        width:180px;
    `
        const Page2img = styled.div`
        height:450px;
        width:100%;
    `

  return (
    <div>
        <Page2Ctnwrapper>
            
            <Page2Ctn>
                <Blank/>
                <Page2title>
                    {
                        "React-Router-Dom 내용정리"
                    }
                </Page2title>
                <Page2info>
                    <Page2infoid>
                        {
                            "lky5697"
                        }
                    </Page2infoid>
                    <Page2infodate>
                        {
                            "1일 전"
                        }
                    </Page2infodate>
                </Page2info>
                <Page2img>
                    <img src='https://images.velog.io/images/eunnbi/post/447e92dc-c93e-4ce9-9561-74dfefb4d838/0_-Mrot3h5AJ9fTFQk.png' width="100%" height='90%'/>
                </Page2img>
            </Page2Ctn>
        </Page2Ctnwrapper>


    </div>
  )
}

export default Page2body