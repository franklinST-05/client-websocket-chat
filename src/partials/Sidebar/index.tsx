"use client";
import InputField from "@/components/InputField";
import { useChatContext } from "@/contexts/ChatContext";
import { User } from "@/services/socket/interfaces/User";
import { handleEvSocket } from "@/services/socket/usecases";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import UserButton from "./components/UserButton";
import Icon from "../../../public/images/icon.svg";
import Image from "next/image";

const Sidebar: React.FC = () => {

  const { setCurrentReceiver, user, activeSidebar, toggleSidebar } = useChatContext();

  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [searchUsers, setSearchUsers] = useState<User[]>(users);
  const [searchValue, setSearchValue] = useState<string>("");

  const [, onEvUser] = handleEvSocket<User[]>("users");
  onEvUser((users) => {
    const filteredUsers = users.filter((u) => u.name !== user.username);  
    setUsers(filteredUsers);

    if(searchUsers.length > 0) {
      searchUsers.forEach((user, index) => {
        const existsUser = users.find((u) => u.id === user.id);
        if(existsUser) {
          searchUsers[index] = existsUser;
          setSearchUsers(searchUsers);
        }
      });
    }
  });

  const eventFindUser = () => {
    const usersFound = users.filter((user) => {
      const compareName = user.name.toUpperCase();
      const compareSearchValue = searchValue.toUpperCase();

      return compareName.includes(compareSearchValue);
    });

    setSearchUsers(usersFound);
  };

  useEffect(() => {
    setUsername(user.username);
  },[]);

  return (
    <aside className={`fixed flex flex-col transition-all w-80 xl:w-96 z-view top-0 -left-96 lg:left-0 h-screen bg-container px-2 space-y-4 ${activeSidebar ? "left-0":""}`}>
      <div>
        <div className="py-8 px-2 flex items-center gap-4">
          <Image src={Icon} alt="ChatGPT" height={40} width={40}/>
          <div>
            <h1 className="text-xl font-medium line-clamp-1">Olá, <span>{username}</span></h1>
            <p className="text-sm text-gray-300 line-clamp-1">A comunidade só esta aumentando!</p>
          </div>
        </div>

        <InputField
          icon={FiSearch}
          className="!bg-wrapper"
          placeholder="Pesquisar"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onKeyUp={eventFindUser}
        />
      </div>

      <div className="flex-1 overflow-y-scroll pb-10">
        {(searchUsers.length != 0 || searchValue.length != 0 ? searchUsers : users).map((user, index) => (
          <UserButton
            key={index}
            username={user.name}
            online={user.online}
            onClick={() => {
              setCurrentReceiver(user);
              toggleSidebar();
            }}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;