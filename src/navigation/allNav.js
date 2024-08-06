import { BiSolidDashboard } from "react-icons/bi";
import { IoIosBasket } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineAirplanemodeInactive } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";

export const allNav = [
    {
        id:1,
        title:"Dashboard",
        icon:<BiSolidDashboard />,
        role:"admin",
        path:"/admin/dashboard"
    },

    {
        id:2,
        title:"Orders",
        icon:<IoIosBasket />,
        role:"admin",
        path:"/admin/dashboard/orders"
    },

    {
        id:3,
        title:"Category",
        icon:<MdCategory/>,
        role:"admin",
        path:"/admin/dashboard/category"
    },

    {
        id:4,
        title:"Sellers",
        icon:< MdProductionQuantityLimits/>,
        role:"admin",
        path:"/admin/dashboard/sellers"
    },

    {
        id:5,
        title:"Payment Request",
        icon:<MdOutlinePayment />,
        role:"admin",
        path:"/admin/dashboard/payment-request"
    },

    {
        id:6,
        title:"Deactive Seller",
        icon:<MdOutlineAirplanemodeInactive/>,
        role:"admin",
        path:"/admin/dashboard/deactive-seller"
    },

    {
        id:7,
        title:"Seller Request",
        icon:<FaCodePullRequest />,
        role:"admin",
        path:"/admin/dashboard/seller-request"
    },

    {
        id:8,
        title:"Live Chat",
        icon:<BsChatDots/>,
        role:"admin",
        path:"/admin/dashboard/chat-sellers",
    },
    {
        id:9,
        title:"Dashboard",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard",
    },
    {
        id:10,
        title:"Add Product",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/add-product",
    },
    {
        id:11,
        title:"All Product",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/products",
    },
    {
        id:12,
        title:"Discount Product",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/discount-products",
    },
    {
        id:13,
        title:"Orders",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/orders",
    },
    {
        id:14,
        title:"Payments",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/payments",
    },
    {
        id:15,
        title:"Chat Customer",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/chat-customer",
    },
    {
        id:16,
        title:"Chat Support",
        icon:<BiSolidDashboard />,
        role:"seller",
        path:"/seller/dashboard/chat-support",
    },



]