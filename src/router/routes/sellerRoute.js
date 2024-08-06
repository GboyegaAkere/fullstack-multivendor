import { lazy } from "react";
import Payment from "../../views/seller/Payment";
const Orders= lazy(()=>import("../../views/seller/Orders"))
const DiscountProduct= lazy(()=>import("../../views/seller/DiscountProduct"))
const AddProduct= lazy(()=>import("../../views/seller/AddProduct"))
const SellerDashboard= lazy(()=>import("../../views/seller/SellerDashboard"))
const Products = lazy(()=>import("../../views/seller/Products"))
const Home= lazy(()=>import("../../views/Home"))

export const sellerRoute =[
    {
        path:"/",
        element:<Home/>,
        ability:["admin","seller"]
    },

    {
        path:"/seller/dashboard",
        element:<SellerDashboard/>,
        ability:["seller"]
    },

    {
        path:"/seller/dashboard/add-product",
        element:<AddProduct/>,
        ability:["seller"]
    },

    {
        path:"/seller/dashboard/products",
        element:<Products/>,
        ability:["seller"]
    },
    {
        path:"/seller/dashboard/discount-products",
        element:<DiscountProduct/>,
        ability:["seller"]
    },

    {
        path:"/seller/dashboard/orders",
        element:<Orders/>,
        ability:["seller"]
    },

    {
        path:"/seller/dashboard/payments",
        element:<Payment/>,
        ability:["seller"]
    }

]