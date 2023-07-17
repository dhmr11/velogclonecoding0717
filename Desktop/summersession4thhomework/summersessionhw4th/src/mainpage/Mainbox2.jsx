import React from 'react'
import styled from "styled-components"
import { AiFillHeart } from "react-icons/ai";



function Mainbox2() {
    const Mainboxdiv2 = styled.div`

        display:flex;
        flex-direction: column;
        background-color: white;

        text-decoration: none;
        width:400px;
        height:450px;
        

    `
    const Mainboxdiv2img = styled.div`
      width:100%;
      height:215px;
    `
    const Mainboxdiv2body = styled.div`

      display:flex;
      flex-direction: column;

      width:100%;
      height:185px;
      
    `
    const Mainbox2title = styled.div`

            padding-left: 5px;


            font-size: 20px;
            font-weight: 600;
            width:100%;
            height:40px;

    `
    const Mainbox2summary = styled.div`
          padding-left: 5px;


          width:100%;
          height:115px;
          color:gray;
    `
    const Mainbox2date = styled.div`
            padding-left: 5px;
            
            display:flex;
            align-items: center;

            width:100%;
            height:30px;
            color:gray;
            font-size: 12px;

    `
    const Mainboxdiv2foot = styled.div`

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width:100%;
      height: 50px;
    `
    const Mainboxdiv2ftleft = styled.div`

            display:flex;
            flex-direction: row;


            width:200px;
            height:100%;

    `
    const Mainboxdiv2ftleft1 = styled.div`

            border-radius: 70%;
            overflow:hidden;
            width:45px;
            height: 100%;
            

    `
    const Mainboxdiv2ftleft2 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;
            color:gray;
            width:35px;

    `
    const Mainboxdiv2ftleft3 = styled.div`


            display:flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            width:110px;

    `          
    const Mainboxdiv2ftright = styled.div`

            display:flex;
            flex-direction: row;

            width: 80px;
            height: 100%;
    `
    const Mainboxdiv2ftright1 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 100%;
    `
    const Mainboxdiv2ftright2 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;
            color:gray;

            width: 40px;
            height: 100%;

    `      
  return (
    <div>
        <Mainboxdiv2>
          <Mainboxdiv2img>
            <img src="https://images.velog.io/images/eunnbi/post/447e92dc-c93e-4ce9-9561-74dfefb4d838/0_-Mrot3h5AJ9fTFQk.png" width="100%" height="100%"/>

          </Mainboxdiv2img>
          <Mainboxdiv2body>
            <Mainbox2title>
              {
                "React-Router-Dom 내용 정리"
              }
            </Mainbox2title>
            <Mainbox2summary>
              {
                "원문 : https://www.builder.io/blog/ai-"
                
              }
              {
                "prompts-for-web-developers-chatgpt지루하"
              }
                            {
                "고 반복적인 코딩 작업에 지쳐서 효율성을 ..."
              }
            </Mainbox2summary>
            <Mainbox2date>
              {
                "1일 전 ＊ 3개의 댓글"
              }
            </Mainbox2date>
            
          </Mainboxdiv2body>
          <Mainboxdiv2foot>
            <Mainboxdiv2ftleft>
              <Mainboxdiv2ftleft1>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=" width="100%" height="100%"/>

              </Mainboxdiv2ftleft1>

              <Mainboxdiv2ftleft2>
                {
                    "by"
                }
              </Mainboxdiv2ftleft2>
              <Mainboxdiv2ftleft3>
                {
                  "Iky5697"
                }
              </Mainboxdiv2ftleft3>
            </Mainboxdiv2ftleft>
            <Mainboxdiv2ftright>
              <Mainboxdiv2ftright1>
                <AiFillHeart fontSize={"25px"}/>
              </Mainboxdiv2ftright1>
              <Mainboxdiv2ftright2>
                {
                  "57"
                }
              </Mainboxdiv2ftright2>
            </Mainboxdiv2ftright>
          </Mainboxdiv2foot>

        </Mainboxdiv2>
    </div>
  )
}

export default Mainbox2