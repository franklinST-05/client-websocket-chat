"use client";
import { useChatContext } from "@/contexts/ChatContext";
import React from "react";
import ChatView from "../ChatView";
import WelcomeView from "../WelcomeView";

const MainView: React.FC = () => {
  
  const { currentReceiver } = useChatContext();

  return (
    <section className="transition-all lg:ml-96 h-screen flex flex-col">
      { currentReceiver ? <ChatView /> : <WelcomeView />}
    </section>
  );
};

export default MainView;