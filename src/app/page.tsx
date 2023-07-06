"use client";
import { ChatProvider } from "@/contexts/ChatContext";
import MainView from "@/partials/MainView";
import Sidebar from "@/partials/Sidebar";
import React from "react";

const HomePage: React.FC = () => {

  return (
    <main>
      <ChatProvider>
        <Sidebar/>
        <MainView />
      </ChatProvider>
    </main>
  );
};

export default HomePage;