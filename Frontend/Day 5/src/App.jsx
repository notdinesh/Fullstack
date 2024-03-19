import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import Navbar from './Pages/user/Navbar';
import Contact from './Pages/user/Contact';
import Footer from './Pages/user/Footer';
import Home from './Pages/user/Home';
import PrivacyPolicy from './Pages/user/PrivacyPolicy';
import TermsAndConditions from './Pages/user/TermsAndConditions';
import FAQs from './Pages/user/FAQs';
import ForgotPassword from './Pages/auth/ForgotPassword';



import {lazy} from "react";
import LazySuspense from "./components/LazySuspense";
const LazyLogin = lazy(()=>import("./Pages/auth/Login"))
const LazySignup = lazy(()=>import("./Pages/auth/Signup"))
const LazyForgetPassword = lazy(()=>import("./Pages/auth/ForgotPassword"))

const LazyUserMain = lazy(() => import("./Pages/user/Main"))
const LazyHome = lazy(() => import("./Pages/user/Home"))
const LazyContact = lazy(() => import("./Pages/user/Contact"))
const LazyPrivacy = lazy(() => import("./Pages/user/PrivacyPolicy"))
const LazyTerms = lazy(() => import("./Pages/user/TermsAndConditions"))
const LazyFAQ = lazy(() => import("./Pages/user/FAQs"))
const LazyCart = lazy(() => import("./Pages/user/Cart"))
const LazyItemCard = lazy(() =>import("./Pages/user/ItemCard"))

const LazyAdminMain = lazy(() => import("./Pages/admin/Main"))
const LazyDashboard = lazy(() => import("./Pages/admin/Dashboard"))

const UserRoutes = () => {
  return (
    <LazyUserMain>
      <Routes>
        <Route path="/home" element={<LazySuspense component={LazyHome}/>}/>
        <Route path="/Contact" element={<LazySuspense component={LazyContact} />} />
        <Route path="/Privacy" element={<LazySuspense component={LazyPrivacy} />} />
        <Route path="/Terms" element={<LazySuspense component={LazyTerms} />} />
        <Route path="/FAQ" element={<LazySuspense component={LazyFAQ} />} />
        <Route path="/cart" element={<LazySuspense component={LazyCart}/>}/>
        <Route path="/item" element={<LazySuspense component={LazyItemCard}/>}/>
      </Routes>
    </LazyUserMain>
  )
}

const AdminRoutes = () => {
  return (
    <LazyAdminMain>
      <Routes>
        <Route path="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
        {/* <Route path="/user-info" element={<UserInfo/>}/> */}
      </Routes>
    </LazyAdminMain>
  )
}

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route exact path="/" element={<Navigate to="/cg/login" />} />
        <Route path="/cg/login" element={<LazySuspense component={LazyLogin} />} />
        <Route path="/cg/signup" element={<LazySuspense component={LazySignup} />} />
        <Route path="/cg/forgot" element={<LazySuspense component={LazyForgetPassword} />} />
        <Route path="/cg/user/*" element={<LazySuspense component={UserRoutes} />} />
        <Route path="/cg/admin/*" element={<LazySuspense component={AdminRoutes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
