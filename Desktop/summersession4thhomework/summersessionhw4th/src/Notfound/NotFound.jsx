import {Link} from "react-router-dom";



function NotFound(){
    return(
        <>
            <Link to={"/"}>Mainpage</Link>
            
            <h1>404 NOTFOUND!!</h1>
        </>
    )
}

export default NotFound;