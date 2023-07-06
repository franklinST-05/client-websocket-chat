import IconButton from "@/components/IconButton";
import InputField from "@/components/InputField";
import { useChatContext } from "@/contexts/ChatContext";
import { MessageReq, MessageRes } from "@/services/socket/interfaces";
import { handleEvSocket } from "@/services/socket/usecases";
import React, { KeyboardEvent, useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";

interface FormMessagesProps {
  onSubmit: (res: MessageRes) => void | unknown;
}

const FormMessages: React.FC<FormMessagesProps> = ({ onSubmit }) => {

  const { currentReceiver } = useChatContext();
  const [message, setMessage] = useState<string>("");
  const [emitEvMessage] = handleEvSocket<MessageReq, MessageRes[]>("message", "msg");

  useEffect(() => {
    setMessage("");
  }, [currentReceiver]);

  const submitMessage = () => {
    emitEvMessage({
      msg: message,
      receiverId: currentReceiver!.id
    });

    onSubmit({ msg: message, senderId: -1, date: new Date() });
    setMessage("");
  };

  const submitMessageOnKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitMessage();
    }
  };

  return (
    <div className="w-full py-4 wr-main flex items-center gap-4">
      <InputField
        placeholder="Messagens"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={submitMessageOnKeyEnter}
      />
      <IconButton icon={FiSend} onClick={submitMessage} />
    </div>
  );
};

export default FormMessages;