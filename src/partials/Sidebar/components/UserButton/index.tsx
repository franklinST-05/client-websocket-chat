"use client";
import React from "react";
import { FiUser } from "react-icons/fi";

interface UserButtonProps {
    username: string;
    online: boolean;
    notifications?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const UserButton: React.FC<UserButtonProps> = ({ username, online, notifications, onClick }) => {

  return (
    <button
      onClick={onClick}
      className="flex items-center w-full gap-2 transition-colors hover:bg-white/10 p-4 rounded-lg select-none outline-none cursor-pointer">
      <div className="block p-4 box-content bg-gray-800 rounded-full relative">
        <FiUser />
        <span className={`block w-5 h-5 ${online ? "bg-success" : "bg-danger"} rounded-full right-0 bottom-0 absolute border-4 border-container`} />
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="text-start">
          <p className="text-md font-medium">{username}</p>
          <p className="text-sm text-gray-200">{online ? "Online" : "Offline"}</p>
        </div>
        {notifications && (notifications > 0) && (
          <span className="flex items-center justify-center text-sm font-bold w-6 h-6 bg-primary rounded-full">
            { notifications > 9 ? "+9" : notifications }
          </span>
        )}
      </div>
    </button>
  );
};

export default UserButton;