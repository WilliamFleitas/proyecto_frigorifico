import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./components/admin/Login";
import { Dashboard } from "./components/home/Dashboard";


  
function App() {
  // const session = JSON.parse(
  //   window.localStorage.getItem("userSession") as string
  // );


  return (
    <div className="flex flex-col items-center justify-center content-center text-white">
      
      <Routes>
        
        <Route index element={<Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        

        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  );
}

export default App;
