"use client";
import React from "react";
import Image from "next/image";
import Illustration from "../../../public/images/back_home.svg";
import Header from "../Header";

const WelcomeView: React.FC = () => {
  return (
    <main className="relative flex flex-1 flex-col">
      <Header title="ChatGPT" subtitle="Chat global para todelovers"/>
      <div className="flex flex-1 flex-col w-full wr-main items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image src={Illustration} className="w-72 h-72 pointer-events-none select-none" alt="" />
          <p className="text-xl font-medium text-gray-500 max-w-xs text-center">Desfrute da nossa comunidade ao maximo, todelover</p>
        </div>
      </div>
    </main>
  );
};

export default WelcomeView;