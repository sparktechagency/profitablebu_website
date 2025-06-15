
import { Root } from "../layout/Root";
import { AboutPage } from "../Pages/CompanyPage/AboutPage";
// import { CompanyPage } from "../Pages/CompanyPage/CompanyPage";
import { TechPartnerPage } from "../Pages/CompanyPage/TechPartnerPage";
import { ContuctUsPage } from "../Pages/ContactUsPage/ContuctUsPage";
import { HomePage } from "../Pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
import { StructuredCabilingPage } from "../Pages/ServicesPage/StructuredCabilingPage";
import { BreakFixServicesPage } from "../Pages/ServicesPage/BreakFixServicesPage";
import { SubmitTicketPage } from "../Pages/SubmitTicketPage.jsx/SubmitTicketPage";
import { BlogPage } from "../Pages/BlogPage/BlogPage";
import { Login } from "../Auth/Login";
import { ForgotPassword } from "../Auth/ForgotPassword";
import { Verification } from "../Auth/Verification";
import { NewPassword } from "../Auth/NewPassword";
import { SignUp } from "../Auth/SignUp";
import { ProfilePage } from "../Pages/ProfilePage/ProfilePage";
import { OngoingTicketPage } from "../Pages/ProfilePage/OngoingTicketPage";
import Faqs from "../Pages/faq/Faqs";
import Chat from "../Pages/chat/Chat";
import Notification from "../Pages/notification/Notification";
import Subscription from "../Pages/subscription/Subscription";
import ErrorPage from "../Pages/error-page/ErrorPage";
import BusinessDirectory from "../Pages/BusinessDirectoryPage/BusinessDirectory";
import BusinessDetails from "../Pages/BusinessDirectoryPage/BusinessDetails";
import MyBusiness from "../Pages/mybusiness/MyBusiness";
import MyBusinessDetails from "../Pages/mybusiness/MyBusinessDetails";
import InterestedBuyer from "../Pages/mybusiness/InterestedBuyer";
import InterestBuyerDetails from "../Pages/mybusiness/interestBuyerDetails";
import AddNewBusiness from "../Pages/mybusiness/AddNewBusiness";
import EditProfile from "../Pages/ProfilePage/EditProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: '/company/about-us',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/company/tech-pertners',
                element: <TechPartnerPage></TechPartnerPage>
            },
            {
                path: '/services/Structure-Cabling',
                element: <StructuredCabilingPage></StructuredCabilingPage>
            },
            {
                path: '/services/Break-FixServices',
                element: <BreakFixServicesPage></BreakFixServicesPage>
            },
            {
                path: '/contactUs',
                element: <ContuctUsPage></ContuctUsPage>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/subscription',
                element: <Subscription></Subscription>
            },
            {
                path: '/faqs',
                element: <Faqs></Faqs>
            },
            {
                path: '/notification',
                element: <Notification></Notification>
            },
            {
                path: '/chat',
                element: <Chat></Chat>
            },
            {
                path: '/myBusiness/details',
                element: <MyBusiness></MyBusiness>
            },
            {
                path: '/interestBuyer',
                element: <InterestedBuyer></InterestedBuyer>
            },
            {
                path: '/interestBuyer/details',
                element: <InterestBuyerDetails></InterestBuyerDetails>
            },
            {
                path: '/details',
                element: <MyBusinessDetails></MyBusinessDetails>
            },
             {
                path: '/addnewbusiness',
                element: <AddNewBusiness></AddNewBusiness>
            },
            {
                path: '/submit-a-ticket',
                element: <SubmitTicketPage></SubmitTicketPage>
            },

            {
                path: '/profilePage',
                element: <ProfilePage></ProfilePage>
            },
            {
                path: '/profilePage/EditProfile',
                element: <EditProfile></EditProfile>
            },
            {
                path: '/profilePage/ongoing-tickets',
                element: <OngoingTicketPage></OngoingTicketPage>
            },
            {
                path: '/advanced-search',
                element: <BusinessDirectory />
            },
            {
                path: '/business/:id',
                element: <BusinessDetails />
            }
        ]
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
        path: '/auth/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/auth/forgot-password',
        element: <ForgotPassword></ForgotPassword>
    },

    {
        path: '/auth/verification',
        element: <Verification></Verification>
    },
    {
        path: '/auth/update-password',
        element: <NewPassword></NewPassword>
    }
]);