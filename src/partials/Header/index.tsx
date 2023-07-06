"use client";
import IconButton from "@/components/IconButton";
import { useChatContext } from "@/contexts/ChatContext";
import React from "react";
import { FiMenu } from "react-icons/fi";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const { toggleSidebar, activeSidebar } = useChatContext();

  return (
    <header className="h-20 wr-main flex items-center">
      <div className="flex items-center gap-4">
        <IconButton icon={FiMenu} data-wrapper={activeSidebar} className="transition-all lg:hidden" onClick={toggleSidebar} />
        <div>
          <p className="text-md font-bold">{title}</p>
          {subtitle && (
            <p className="text-sm text-gray-200">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;