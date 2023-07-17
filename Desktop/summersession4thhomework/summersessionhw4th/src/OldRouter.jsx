import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./mainpage/Mainpage";
import Page1 from "./page1/Page1";



function Router(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/about" element={<Page1 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;