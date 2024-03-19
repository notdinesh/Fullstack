import { Navigate, Route, Routes } from "react-router-dom";
import {lazy} from "react";
import LazySuspense from "./components/LazySuspense";

const LazyLogin = lazy(()=>import("./pages/auth/Login"))
const LazyRegister = lazy(()=>import("./pages/auth/Register"))
const LazyForgetPassword = lazy(()=>import("./pages/auth/ForgotPassword"))
const LazyUserMain = lazy(() => import("./pages/user/Home"))
const LazyHome = lazy(() => import("./pages/user/Home"))
const LazyAdminMain = lazy(() => import("./pages/admin/Main"))
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"))


const UserRoutes = () => {
  return (
    <LazyUserMain>
      <Routes>
        <Route path="/project6/home" element={<LazySuspense component={LazyHome}/>}/>
      </Routes>
    </LazyUserMain>
  )
}

const AdminRoutes = () => {
  return (
    <LazyAdminMain>
      <Routes>
        <Route path="/dashboard" element={<LazySuspense component={LazyDashboard}/>}/>
      </Routes>
    </LazyAdminMain>
  )
}


function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Navigate to="/project6/login"/>}/>
      <Route path="/project6/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/project6/register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/project6/forger-password" element={<LazySuspense component={LazyForgetPassword}/>}/>
      <Route path="/project6/user/*" element={<LazySuspense component={UserRoutes}/>}/>
      <Route path="/project6/admin/*" element={<LazySuspense component={AdminRoutes}/>}/>

    </Routes>
    </div>
  )
}

export default App