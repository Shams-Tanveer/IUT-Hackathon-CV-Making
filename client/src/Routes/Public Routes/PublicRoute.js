const { createBrowserRouter } = require("react-router-dom");
const { default: SideLayouts } = require("../../Layouts/SideLayouts/SideLayouts");
const { default: Home } = require("../../Pages/Home/Home");

const router=createBrowserRouter([
    {
        path:"/",
        element:<SideLayouts></SideLayouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])
export default router;