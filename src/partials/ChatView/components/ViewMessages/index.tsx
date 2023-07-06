import CardMessage from "@/components/CardMessage";
import TimeIndicator from "@/components/TimeIndicator";
import { useChatContext } from "@/contexts/ChatContext";
import { MessageRes } from "@/services/socket/interfaces";
import { compareParcialDate } from "@/utils/date";
import React, { Fragment, useEffect, useRef } from "react";

interface ViewMessagesProps {
  messages: MessageRes[]
}

const ViewMessages: React.FC<ViewMessagesProps> = ({ messages }) => {

  const { currentReceiver } = useChatContext();
  const refWrapperMessages = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refWrapperMessages.current) {
      const { current } = refWrapperMessages;

      current.scrollTo({
        behavior: "smooth",
        top: current.scrollHeight
      });
    }
  }, [messages]);

  return (
    <div ref={refWrapperMessages} className="relative flex flex-1 flex-col w-full wr-main space-y-2 overflow-y-scroll">
      
      {messages.map((msg, index) => {
        const prevMessage = messages[index - 1];
        const showDate = compareParcialDate(prevMessage?.date, msg.date);

        return (
          <Fragment key={index}>
            {showDate && <TimeIndicator date={msg.date!} />}
            <CardMessage
              position={msg.senderId === currentReceiver!.id ? "left" : "right"}
              message={msg.msg}
              date={msg.date!}
            />
          </Fragment>
        );
      })}

    </div>
  );
};

export default ViewMessages;