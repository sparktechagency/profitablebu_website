import { Root } from '../layout/Root';
import { AboutPage } from '../Pages/selling/AboutPage';
// import { CompanyPage } from "../Pages/CompanyPage/CompanyPage";
import { TechPartnerPage } from '../Pages/selling/TechPartnerPage';
import { ContuctUsPage } from '../Pages/ContactUsPage/ContuctUsPage';
import { HomePage } from '../Pages/HomePage/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import { StructuredCabilingPage } from '../Pages/buying/StructuredCabilingPage';
import { BreakFixServicesPage } from '../Pages/buying/BreakFixServicesPage';
import { SubmitTicketPage } from '../Pages/SubmitTicketPage.jsx/SubmitTicketPage';
import { BlogPage } from '../Pages/BlogPage/BlogPage';
import Login from '../Auth/Login';
import ForgotPassword from '../Auth/ForgotPassword';
import Verification from '../Auth/Verification';
import NewPassword from '../Auth/NewPassword';
import { ProfilePage } from '../Pages/ProfilePage/ProfilePage';
import { OngoingTicketPage } from '../Pages/ProfilePage/OngoingTicketPage';
import Faqs from '../Pages/faq/Faqs';
import Chat from '../Pages/chat/Chat';
import Notification from '../Pages/notification/Notification';
import Subscription from '../Pages/subscription/Subscription';
import ErrorPage from '../Pages/error-page/ErrorPage';
import BusinessDirectory from '../Pages/BusinessDirectoryPage/BusinessDirectory';
import BusinessDetails from '../Pages/BusinessDirectoryPage/BusinessDetails';
import MyBusiness from '../Pages/mybusiness/MyBusiness';
import MyBusinessDetails from '../Pages/mybusiness/MyBusinessDetails';
import InterestedBuyer from '../Pages/mybusiness/InterestedBuyer';
import InterestBuyerDetailss from '../Pages/mybusiness/InterestBuyerDetailss';
import AddNewBusiness from '../Pages/mybusiness/AddNewBusiness';
import EditProfile from '../Pages/ProfilePage/EditProfile';
import AboutUs from '../Pages/AboutUs/AboutUs';
import TermsAndConditions from '../Pages/TermsAndConditions/TermsAndConditions';
import RefundAndCancellationPolicy from '../Pages/RefundAndCancellationPolicy/RefundAndCancellationPolicy';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';
import ContactUs from '../Pages/ContactUs/ContactUs';
import AdvanceSearch from '../Pages/AdvanceSearch/AdvanceSearch';
import BussinessDetails from '../Pages/BussinessDetails/BussinessDetails';
import BussinessDetailsWithForm from '../Pages/BussinessDetailsWithForm/BussinessDetailsWithForm';
import BuyerContactInfo from '../Pages/BussinessDetailsWithForm/BuyerContactInfo';
import BusinessValuationForm from '../Pages/BussinessValuation/BussinessValuation';
import BusinessValuationSubmission from '../Pages/BussinessValuation/BusinessValuationSubmission';
import BusinessFormation from '../Pages/BusinessFormation/BusinessFormation';
import BusinessFormationDetails from '../Pages/BusinessFormation/BusinessFormationDetails';
import SubscriptionPlane from '../Pages/plane/SubscriptionPlane';
import AllFaq from '../Pages/faq/AllFaq';
import FaqSeller from '../Pages/faq/FaqSeller';
import FaqAsset from '../Pages/faq/FaqAsset';
import FaqBrokers from '../Pages/faq/FaqBrokers';
import FaqBusiness from '../Pages/faq/FaqBusiness ';
import FaqFranchise from '../Pages/faq/FaqFranchise ';
import FaqInvestors from '../Pages/faq/FaqInvestors';
import Seller from '../Pages/seller/Seller';
import ChooseRole from '../Auth/ChooseRole';
import EditNewBusiness from '../Pages/mybusiness/EditNewBusiness';
import SignUp from '../Auth/SignUp';
import SchedualeCall from '../Pages/BussinessValuation/SchedualeCall';
import AllBusinessFilter from '../Pages/BusinessDirectoryPage/AllBusinessFilter';
import VerifyRegister from '../Auth/VerifyRegister';
import SuccessfullPage from '../Pages/plane/SuccessfullPage';
import ErrorPay from '../Pages/plane/ErrorPay';
import SingleSubscription from '../Pages/plane/SingleSubscription';
import SubmissionDone from '../Pages/BussinessValuation/SubmissionDone';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/company/about-us',
        element: <AboutPage></AboutPage>,
      },
      {
        path: '/company/tech-pertners',
        element: <TechPartnerPage></TechPartnerPage>,
      },
      {
        path: '/services/Structure-Cabling',
        element: <StructuredCabilingPage></StructuredCabilingPage>,
      },
      {
        path: '/services/Break-FixServices',
        element: <BreakFixServicesPage></BreakFixServicesPage>,
      },
      {
        path: '/contactUs',
        element: <ContuctUsPage></ContuctUsPage>,
      },
      {
        path: '/blog',
        element: <BlogPage></BlogPage>,
      },
      {
        path: '/subscription',
        element: <Subscription></Subscription>,
      },
      {
        path: '/plane',
        element: <SubscriptionPlane></SubscriptionPlane>,
      },
       {
        path: '/plane/singlePlane/:id',
        element: <SingleSubscription></SingleSubscription>
      },
      {
        path: '/allFaqs',
        element: <AllFaq></AllFaq>,
      },
      {
        path: '/faqs',
        element: <Faqs></Faqs>,
      },
      {
        path: '/faqsSeller',
        element: <FaqSeller></FaqSeller>,
      },
      {
        path: '/FaqAsset',
        element: <FaqAsset></FaqAsset>,
      },
      {
        path: '/FaqBrokers',
        element: <FaqBrokers></FaqBrokers>,
      },
      {
        path: '/FaqBusiness',
        element: <FaqBusiness></FaqBusiness>,
      },
      {
        path: '/FaqFranchise',
        element: <FaqFranchise></FaqFranchise>,
      },
      {
        path: '/FaqInvestors',
        element: <FaqInvestors></FaqInvestors>,
      },

      // {
      //   path: "/notification",
      //   path: '/faqs',
      //   element: <Faqs></Faqs>,
      // },
      {
        path: '/notification',
        element: <Notification></Notification>,
      },
      {
        path: '/chat',
        element: <Chat></Chat>,
      },
      {
        path: '/myBusiness/details',
        element: <MyBusiness></MyBusiness>,
      },
      {
        path: '/interestBuyer/:id',
        element: <InterestedBuyer></InterestedBuyer>,
      },
     {
  path: '/interestBuyer/details/:interestedId/iterestDetails/:businessId',
  element: <InterestBuyerDetailss />
},

      {
        path: '/details/:id',
        element: <MyBusinessDetails></MyBusinessDetails>,
      },
      {
        path: '/addnewbusiness',
        element: <AddNewBusiness></AddNewBusiness>,
      },
      {
        path: '/editnewbusiness/:id',
        element: <EditNewBusiness></EditNewBusiness>
      },
      {
        path: '/submit-a-ticket',
        element: <SubmitTicketPage></SubmitTicketPage>,
      },

      {
        path: '/profilePage',
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: '/Seller',
        element: <Seller></Seller>,
      },
      {
        path: '/profilePage/EditProfile',
        element: <EditProfile></EditProfile>,
      },
      {
        path: '/profilePage/ongoing-tickets',
        element: <OngoingTicketPage></OngoingTicketPage>,
      },
      {
        path: '/search',
        element: <AllBusinessFilter></AllBusinessFilter>
      },
      {
        path: '/business/:id',
        element: <BusinessDetails />,
      },

      // aman

      {
        path: '/advanced-search',
        element: <AdvanceSearch />,
      },
      {
        path: '/business-details',
        element: <BussinessDetails />,
      },
      {
        path: '/business-details-with-form/:id',
        element: <BussinessDetailsWithForm />,
      },
      {
        path: '/buyer-contact-info',
        element: <BuyerContactInfo />,
      },
      {
        path: '/business-valuaion',
        element: <BusinessValuationForm />,
      },
      {
        path: '/business-schedule',
        element: <SchedualeCall></SchedualeCall>
      },
      {
        path: '/business-valuaion-submission',
        element: <BusinessValuationSubmission />,
      },
        {
        path: '/business-valuaion-submission/submissionDone',
        element: <SubmissionDone></SubmissionDone>
      },
      {
        path: '/business-formation',
        element: <BusinessFormation />,
      },
      {
        path: '/business-formation-details/:id',
        element: <BusinessFormationDetails />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/refund-and-cancellation-policy',
        element: <RefundAndCancellationPolicy />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/signUp',
        element: <SignUp></SignUp>,
      },
       {
        path: '/payment-successfull',
        element: <SuccessfullPage></SuccessfullPage>
      },
       {
        path: '/Error-payment',
        element: <ErrorPay></ErrorPay>
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword></ForgotPassword>,
      },
      
       {
        path: '/auth/verifyCreator',
        element: <VerifyRegister></VerifyRegister>
      },

      {
        path: '/auth/verification',
        element: <Verification></Verification>,
      },
      {
        path: '/auth/update-password',
        element: <NewPassword></NewPassword>,
      },
      {
        path: '/auth/choose-role',
        element: <ChooseRole></ChooseRole>,
      },
    ],
  },
]);
