import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./components/admin/Login";
import { Dashboard } from "./components/home/Dashboard";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import Protected from "./components/admin/functions/Protected";
import { getUserData } from "./redux/userSlice/userAction";
import { useAppDispatch, useAppSelector } from "./hooks";
import ProtectedAdmin from "./components/admin/functions/ProtectedAdmin";


  
function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const session = JSON.parse(
    window.localStorage.getItem("userSession") as string
  );
  const { username } = useAppSelector((state) => state.user.user);
console.log(location.pathname)
useEffect(() => {
    if (session) {
      dispatch(getUserData());
    }
  }, []);

  useEffect(() => {
    if(location.pathname === "/" || location.pathname === "/login"){
        document.body.style.backgroundColor = "#CB9406";
    }
    else{
      document.body.style.backgroundColor = "#4A4646";
    }
}, [location])
  return (
    <div className="flex flex-col items-center justify-center content-center text-white h-screen">
      
      <Routes>
        
        <Route index element={username ? <Navigate to="/dashboard" /> : <Login/>} />
        <Route path="/login" element={username ? <Navigate to="/dashboard" /> : <Login/>} />


        <Route path="/dashboard" element={
        <Protected>
        <Dashboard />
        </Protected>} />

        <Route path="/admin/dashboard" element={
          <ProtectedAdmin>
        <AdminDashboard/>
          </ProtectedAdmin>
        } />

        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  );
}

export default App;
