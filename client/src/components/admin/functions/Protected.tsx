import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { setUserRoll } from "../../../redux/userSlice/userAction";
import { getUserCall } from "./getUsersCall";

interface IProtectedProps {
  children: JSX.Element;
}

const Protected = ({ children }: IProtectedProps) => {
    const dispatch = useAppDispatch();
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = window.localStorage.getItem("userSession");
    setDisplay(false)
    if (session) {
        getUserCall()
        .then(({data}) => {
            console.log("datagetuser", data);
                dispatch(setUserRoll(data.privilege))
                setDisplay(true);
        })
        .catch((error) => {
          localStorage.removeItem("userSession");
          console.log(error);
          alert("Acceso denegado por permisos")
          navigate("/");
        });
    }else{
      navigate('/')
    }
  }, [setDisplay, navigate]);

  return <>{display ? children : <h1>Cargando..</h1> }</>;
};

export default Protected;