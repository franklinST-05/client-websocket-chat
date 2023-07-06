"use client";
import React from "react";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import Icon from "../../../public/images/icon.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema } from "@/schemas/AuthSchema";
import { setCookie } from "cookies-next";
import { getFutureDate } from "@/utils/date";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {

  const router = useRouter();

  const { handleSubmit, register } = useForm<AuthSchema>({
    resolver: zodResolver(AuthSchema)
  });

  const handleLogin = handleSubmit((fields) => {
    setCookie("username", fields.username, {
      expires: getFutureDate(5),
    });

    router.push("/");
  });

  return (
    <main className="h-screen w-full flex items-center justify-center wr-main">
      <div className="w-full max-w-md flex flex-col gap-8 items-center">
        <div className="w-full space-y-4 text-center">
          <Image src={Icon} alt="" className="w-16 h-16 mx-auto animate-bounce" />
          <div className="text-center">
            <h1 className="text-xl font-semibold">Bem vindo ao ChatGPT</h1>
            <p className="text-sm text-gray-400">Chat Global Para Todelovers</p>
          </div>
        </div>

        <form className="w-full space-y-3" onSubmit={handleLogin}>
          <InputField
            {...register("username")}
            placeholder="Usuario"
            name="username"
            icon={FiUser}
            autoComplete="off"
          />
          <Button>Entrar</Button>
        </form>
      </div>

    </main>
  );
};

export default LoginPage;