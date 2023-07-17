import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./Notfound/Notfound";
import Mainpage from "./mainpage/Mainpage";
import Page1 from "./page1/Page1";
import Page2 from "./page2/Page2";
import Page3 from "./page3/Page3";







const router = createBrowserRouter([

    {
    path:"/",
    element: <Root/>,
    children : [
        {
            path:"",
            element: <Mainpage/>
        },
        {
            path:"Page1",
            element: <Page1/>
        },
        {
            path:"Page2",
            element: <Page2/>
        },
        {
            path:"Page3",
            element: <Page3/>
        },



    ],
    errorElement: <NotFound/>
    },
]);

export default router;