import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
const trimString = (u: unknown) => (typeof u === "string" ? u.trim() : u);

const logSchema = z.object({
  username: z.preprocess(
    trimString,
    z.string().min(4, { message: "Ingrese un usuario valido" })
  ),
  password: z.preprocess(
    trimString,
    z.string().min(5, { message: "Ingresa una contraseña valida" })
  ),
});
type logType = z.infer<typeof logSchema>;

export const Login = () => {
  const BackUrl = import.meta.env.VITE_BACK_URL as string;
  const [loginErrors, setLoginErrors] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<logType>({
    resolver: zodResolver(logSchema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    setLoginErrors("");
    axios
      .post(`${BackUrl}/api/auth/signin`, formData)
      .then(({ data }) => {
        localStorage.setItem("userSession", JSON.stringify(data.token));
        window.location.replace("/dashboard");
      })
      .catch((e: any) => {
        setLoginErrors(
          e.response?.data?.errors?.[0]
            ? e.response?.data?.errors?.[0].msg.toString()
            : e.response?.data
        );
      });
  });

  return (
    <div className="flex flex-col text-center justify-center items-center ">
      <h2 className="pb-5 text-[20px]">Nombre de la empresa </h2>
      <form
        className="text-white bg-[#443F3F]  rounded-lg flex flex-col m-auto text-center justify-center items-center"
        onSubmit={onSubmit}
      >
        <h2 className="pt-5 text-[18px]">Iniciar sesión</h2>
        <div className=" w-full h-full  grid grid-cols-1 px-5">
          <label className="text-sm text-white border-2 border-white relative top-[8px] left-3 bg-[#CB9406] w-fit px-1 rounded-xl">
            Ingrese usuario
          </label>
          <input
            className="w-full border bg-[#C4C2C2] border-white rounded-xl px-3 py-2 p-2 text-black h-full text-start"
            type={"text"}
            id="user"
            {...register("username")}
          />

          {errors?.username && (
            <p className="text-sm text-red-400">{errors.username.message}</p>
          )}

          <label className="text-sm text-white border-2 border-white relative top-[8px] left-3 bg-[#CB9406] w-fit px-1 rounded-xl">
            Ingrese contraseña
          </label>
          <input
            className="w-full border bg-[#C4C2C2] border-white rounded-xl px-3 py-2 p-2 text-black h-full text-start"
            type={"password"}
            id="password"
            {...register("password")}
          />

          {errors?.password && (
            <p className="text-sm text-red-400">{errors.password.message}</p>
          )}
        </div>
        <div className="py-5 m-auto">
          <div className="bg-[#CB9406] hover:bg-opacity-[85%] rounded-lg px-2 py-1 text-white border border-white">
            <button type="submit">INICIAR </button>
          </div>
          {loginErrors ? (
            <div>
              <p className="text-red-500">{loginErrors}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};
