import Main from "../../Layouts/Main/Main";
import Login from "../../User Creation/Login/Login";
import Signup from "../../User Creation/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: SideLayouts } = require("../../Layouts/SideLayouts/SideLayouts");
const { default: Home } = require("../../Pages/Home/Home");

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<SideLayouts></SideLayouts>,
                children:[
                    {
                        path:"/",
                        element:<Home></Home>
                    }
                ]
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            }
        ]
    }
])
export default router;