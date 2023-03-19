import CVdownloader from "../../CVdownloader/CVdownloader";
import Main from "../../Layouts/Main/Main";
import Aboutus from "../../Pages/About Us/Aboutus";
import BuiltinTemplates from "../../Pages/BuiltinTemplates/BuiltinTemplates";
import TemplateComponent2 from "../../Pages/BuiltinTemplates/TemplateComponent2";
import TemplateComponent1 from "../../Pages/BuiltinTemplates/TemplateComponents/TemplateComponent1";
import Community from "../../Pages/Community/Community";
import CustomBuild from "../../Pages/CustomBuild/CustomBuild";
import Popular from "../../Pages/Popular/Popular";
import UpdateProfile from "../../Pages/Update Profile/UpdateProfile";
import UserInfo from "../../Pages/UserInfo/UserInfo";
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
                        path:"/popular",
                        element:<Popular></Popular>
                    },
                    {
                        path:"/userInfo",
                        element:<UserInfo></UserInfo>
                    },
                    {
                        path:"/pdftype",
                        element:<CVdownloader></CVdownloader>
                    },
                    {
                        path:"/createdcv",
                        element:<TemplateComponent2></TemplateComponent2>
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
            },
            {
                path:"/templates",
                element:<BuiltinTemplates></BuiltinTemplates>
            },
            {
                path:"/aboutus",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/updateProfile",
                element:<UpdateProfile></UpdateProfile>
            }
        ]
    }
])
export default router;