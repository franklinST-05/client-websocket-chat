"use client";
import { useChatContext } from "@/contexts/ChatContext";
import { HistoryReq, MessageReq, MessageRes } from "@/services/socket/interfaces";
import { handleEvSocket } from "@/services/socket/usecases";
import React, { useEffect, useState } from "react";
import Header from "../Header";
import FormMessages from "./components/FormMessages";
import ViewMessages from "./components/ViewMessages";
import { compareDate } from "@/utils/date";

const ChatView: React.FC = () => {
  const { currentReceiver } = useChatContext();
  const [messages, setMessages] = useState<MessageRes[]>([]);

  const [, onEvMessage] = handleEvSocket<MessageReq, MessageRes[]>("message", "msg");
  const [emitEvHistory, onEvHistory] = handleEvSocket<HistoryReq, MessageRes[]>("history");

  useEffect(() => {
    emitEvHistory({
      receiverId: currentReceiver!.id,
      size: 60,
    });
  }, [currentReceiver]);

  onEvHistory((historyMessages) => {
    const sortedMessages = historyMessages.sort((lm, m) => compareDate(m.date, lm.date) ? 1 : -1);
    setMessages(sortedMessages);
  });


  onEvMessage((msg) => {
    const filteredMessages = msg.filter((m) => m.senderId === currentReceiver!.id);
    setMessages(messages.concat(filteredMessages));
  });

  return (
    <>
      <Header title={currentReceiver!.name} />
      <ViewMessages messages={messages} />
      <FormMessages
        onSubmit={(msg) => {
          setMessages(messages.concat([msg]));
        }}
      />
    </>
  );
};

export default ChatView;