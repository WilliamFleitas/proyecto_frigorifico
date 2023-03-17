import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./components/admin/Login";


  
function App() {
  // const session = JSON.parse(
  //   window.localStorage.getItem("userSession") as string
  // );


  return (
    <div className="flex flex-col items-center justify-center content-center">
      
      <Routes>
        
        <Route index element={<Login />} />
        <Route path="/home" element={<Login/>} />

        

        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </div>
  );
}

export default App;
