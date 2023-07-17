import styled from "styled-components";
import React from 'react'
import Navbartohome from "../Navbartohome/Navbartohome";

function Page3body() {
    const Page3Ctnwrapper = styled.div`
        
        display:flex;
        justify-content: center;
    `
    const Page3Ctn = styled.div`
        width:50%;
    `
    const Blank = styled.div`      
        

        width:100%;
        height: 100px;
    `
    const Page3title = styled.div`
       

        display:flex;
        align-items: center;
        font-size: 50px;
        font-weight: 600;

        height:200px;
        width:100%;
    `
        const Page3info = styled.div`
        

        display: flex;
        flex-direction: row;
        align-items: center;

        height:100px;
        width:100%;


    `
        const Page3infoid = styled.div`


        display:flex;
        justify-content: center;
        align-items: center;
        font-weight:600 ;
        height:15px;
        width:120px;
    `
        const Page3infodate = styled.div`

        display:flex;
        justify-content: center;
        align-items: center;
        color:gray;
        height:15px;
        width:180px;
    `

        const Page3abouthook = styled.div`
            width:100%;
        `
  return (
    <div>
        <Page3Ctnwrapper>
            <Page3Ctn>
                <Blank/>
                <Page3title>
                    {
                        "노마드 코더 강의 내용 정리"
                    }
                </Page3title>
                <Page3info>
                    <Page3infoid>
                        {
                            "dhmr11"
                        }
                    </Page3infoid>
                    <Page3infodate>
                        {
                            "2023년 07월 17일"
                        }
                    </Page3infodate>
                </Page3info>
                <Page3abouthook>
                    <h1>Learn by Building 10 Hooks</h1>
                    <h2>Hooks에 대하여</h2>
                    <hr></hr>
                    <p>클래스형 컴포넌트는 함수형 컴포넌트와 다르게 state에 따른 
                        life-cycle매서드가 있지만 함수형 컴포넌트는 그렇지 않기에 
                        등장한것이 Hooks이며 react의 state machine에 연결하는 기
                        본적인 방법이다. 또한 Class 컴포넌트에서 작성하는것보다도 
                        함수형 컴포넌트를 이용하게 된다면 훨씬 코드를 더 간결하게
                        나타낼 수 있다.
                    </p>
                    <hr></hr>
                    <h2>useState</h2>
                    <p>useState는 두가지 값을 반환한다. 배열안에 두가지 값을
                        담을 수 있게 되는데. 첫번째 값은 useState에 작성하는 초기 입력값
                        이며 두번째 값은 useState를 이용해서 구현할 함수를 입력하는것
                        이다.
                    </p>
                    <p>useinput은 초기값 initalValue 하나의 값만 받는다. 이후 function을
                        이용해서 다른 함수의 이벤트를 처리할 수 있게 된다
                        이벤트를 분리된 파일, 다른 entity에 연결해서 처리할 수 있다

                        + input 값의 value= name.value ,onChange= name.onChange 등의 값을 
                        ...name으로 바꿔서 간결하게 작성할 수 있다. 이 뜻은 name에 있는 모든 것을 unpack 해달라는 뜻.
    
                    </p>
                    <p>+유효성을 검사하는 함수: validator</p>
                    
                    <h2>useClick</h2>
                    <p>useref에 관한 설명을 앞서 하면 js의 getelementID와 
                        비슷한기능을 가진다. reference는 기본적으로 component의 어떤 부분을 
                        선택할 수 있는 방법.                    
                    </p>
                    <p>
                        useClick는 elemen를 누가 눌렀을 때 알 수 있게 해주는 기능.useEffect의 기능을 
                        넣어주게 된다면 reference 안에 element.current가 있는지 확인할 수 있는 역할을 하며
                        조건이 만족된다면 클릭 이벤트를 감지하는 역할.
                    </p>
                    <h2>
                        UseFadeIn
                    </h2>
                    <p>
                        서서히 element를 나타나게 하는 기능 hooks에 animation을 섞을 수 있는 방법.
                        transition 대신에 property,duration,timing등을 이용해서 각각 설정해주면 hook을 더 크게 만들어줄 수있다.

                    </p>
                    <h2>
                        useNetwork
                    </h2>
                    <p>
                        useNetwork는 내비게이터가 온라인,오프라인 되는것을 막아주는 기능이다. 네트워크의 상태가
                        바뀔때마다 감지하는것.
                    </p>
                    <h2>
                        useScroll
                    </h2>
                    <p>
                        useScroll은 스크롤을 했을 때 변화하는 기능을 추가해주는 것.
                        useEffect으로 y축,x축의 스크롤시 변화를 감지하고 그거에따른 변화를 줄 수 있는 기능
                    </p>
                    <h2>
                        useFullscreen
                    </h2>
                    <p>
                        요소를 받으면 전체화면으로 바꿔주는 hook
                    </p>
                    <h2>
                        useNotification
                    </h2>
                    <p>
                        알람처럼 확인해야할것이 뜨게 하는것.notification api를 이용해서 만든다.window 언급에 접근을 해야함
                        사람들이 원하는 이미지 아이콘 등등 모든것을 사용할 수 있다.
                    </p>
                    <h2>
                        useAxios
                    </h2>
                    <p>
                        axios는 기본 url ,자동 헤더등을 만들어낼 수 있다.
                    </p>
                    <h2>
                        hook publish
                    </h2>
                    <p>
                        만들었던 hook들은 npm modules에 등록도 가능하고 이용도 자유롭게 가능하다.
                        organization을 만들고 
                        npm 로그인이 되어있는지 보고
                        npm publish를 시키기
                    </p>
                    
                    
                </Page3abouthook>
            </Page3Ctn>
        </Page3Ctnwrapper>


    </div>
  )
}

export default Page3body