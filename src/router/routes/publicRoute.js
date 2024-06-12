import { lazy } from "react";
const AdminLogin = lazy(()=>import("../../views/auth/AdminLogin"))
const Register = lazy(()=>import("../../views/auth/Register"))
const Login = lazy(()=>import("../../views/auth/Login"))

const publicRoutes =[
    {
        path:"/login",
        element:<Login/>
    },

    {
        path:"/register",
        element:<Register/>
    },

    {
        path:"/admin/Login",
        element:<AdminLogin/>
    }
]

export default publicRoutes