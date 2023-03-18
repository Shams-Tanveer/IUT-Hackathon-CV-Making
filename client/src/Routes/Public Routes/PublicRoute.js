import Main from "../../Layouts/Main/Main";
import Community from "../../Pages/Community/Community";
import CustomBuild from "../../Pages/CustomBuild/CustomBuild";
import Popular from "../../Pages/Popular/Popular";
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
                    },
                    {
                        path:"/custom",
                        element:<CustomBuild></CustomBuild>
                    },
                    
                    {
                        path:"/community",
                        element:<Community></Community>
                    },
                    {
                        path:"popular",
                        element:<Popular></Popular>
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