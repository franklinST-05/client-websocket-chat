"use client";
import { User } from "@/services/socket/interfaces";
import { getCookie } from "cookies-next";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ChatContext {
  user: {
    username: string;
  };
  currentReceiver: User | undefined;
  setCurrentReceiver: Dispatch<SetStateAction<User | undefined>>;
  activeSidebar: boolean;
  toggleSidebar: () => void;
}

const ChatContext = createContext<ChatContext | undefined>(undefined);

export const useChatContext = (): ChatContext => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user = { username: getCookie("username") as string };
  const [currentReceiver, setCurrentReceiver] = useState<User | undefined>();
  const [activeSidebar, setActiveSidebar] = useState<boolean>(false);

  const toggleSidebar = () => setActiveSidebar(!activeSidebar);

  const chatContext: ChatContext = {
    user,
    currentReceiver,
    setCurrentReceiver,
    activeSidebar,
    toggleSidebar,
  };

  return (
    <ChatContext.Provider value={chatContext}>
      {children}
    </ChatContext.Provider>
  );
};
