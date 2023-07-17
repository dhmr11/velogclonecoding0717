import React from 'react'
import styled from "styled-components"
import { AiFillHeart } from "react-icons/ai";


function Mainbox1() {
    const Mainboxdiv1 = styled.div`

        display:flex;
        flex-direction: column;
        background-color: white;

        text-decoration: none;
        width:400px;
        height:450px;
        

    `
    const Mainboxdiv1img = styled.div`
      width:100%;
      height:215px;
    `
    const Mainboxdiv1body = styled.div`

      display:flex;
      flex-direction: column;

      width:100%;
      height:185px;
      
    `
    const Mainbox1title = styled.div`

            padding-left: 5px;


            font-size: 20px;
            font-weight: 600;
            width:100%;
            height:40px;

    `
    const Mainbox1summary = styled.div`
          padding-left: 5px;


          width:100%;
          height:115px;
          color:gray;
    `
    const Mainbox1date = styled.div`
            padding-left: 5px;
            
            display:flex;
            align-items: center;

            width:100%;
            height:30px;
            color:gray;
            font-size: 12px;

    `
    const Mainboxdiv1foot = styled.div`

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width:100%;
      height: 50px;
    `
    const Mainboxdiv1ftleft = styled.div`

            display:flex;
            flex-direction: row;


            width:200px;
            height:100%;

    `
    const Mainboxdiv1ftleft1 = styled.div`

            border-radius: 70%;
            overflow:hidden;
            width:45px;
            height: 100%;
            

    `
    const Mainboxdiv1ftleft2 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;
            color:gray;
            width:35px;

    `
    const Mainboxdiv1ftleft3 = styled.div`


            display:flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            width:110px;

    `          
    const Mainboxdiv1ftright = styled.div`

            display:flex;
            flex-direction: row;

            width: 80px;
            height: 100%;
    `
    const Mainboxdiv1ftright1 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 100%;
    `
    const Mainboxdiv1ftright2 = styled.div`

            display:flex;
            justify-content: center;
            align-items: center;
            color:gray;

            width: 40px;
            height: 100%;

    `        

  return (
    <div>
        <Mainboxdiv1>
          <Mainboxdiv1img>
            <img src="https://styled-components.com/meta.png" width="100%" height="100%"/>

          </Mainboxdiv1img>
          <Mainboxdiv1body>
            <Mainbox1title>
              {
                "Styled-Component 내용 정리"
              }
            </Mainbox1title>
            <Mainbox1summary>
              {
                "새로운 시작!"
              }
            </Mainbox1summary>
            <Mainbox1date>
              {
                "2023년 7월 4일 ＊ 3개의 댓글"
              }
            </Mainbox1date>
            
          </Mainboxdiv1body>
          <Mainboxdiv1foot>
            <Mainboxdiv1ftleft>
              <Mainboxdiv1ftleft1>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=" width="100%" height="100%"/>

              </Mainboxdiv1ftleft1>

              <Mainboxdiv1ftleft2>
                {
                    "by"
                }
              </Mainboxdiv1ftleft2>
              <Mainboxdiv1ftleft3>
                {
                  "lingodingo"
                }
              </Mainboxdiv1ftleft3>
            </Mainboxdiv1ftleft>
            <Mainboxdiv1ftright>
              <Mainboxdiv1ftright1>
                <AiFillHeart fontSize={"25px"}/>
              </Mainboxdiv1ftright1>
              <Mainboxdiv1ftright2>
                {
                  "180"
                }
              </Mainboxdiv1ftright2>
            </Mainboxdiv1ftright>
          </Mainboxdiv1foot>

        </Mainboxdiv1>
    </div>
  )
}

export default Mainbox1