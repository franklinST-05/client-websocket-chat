"use client";
import React from "react";

interface CardMessageProps {
    position: "left" | "right";
    message: string;
    date: Date | string;
}

const CardMessage: React.FC<CardMessageProps> = ({ message, date, position }) => {

  const convertedDate = new Date(date);
  const isRight = position === "right";
  const formatter = Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12"
  });

  return (
    <div className={`flex flex-shrink-0 ${isRight ? "self-end" : "self-start"}`}>
      <div className={`min-w-[120px] rounded py-2 px-3 ${isRight ? "bg-primary": "bg-container"} text-white`}>
        <p className="text-sm mt-1">
          {message}
        </p>
        <p className="text-right text-xs text-white/70 mt-1 select-none">
          {formatter.format(convertedDate)}  
        </p>
      </div>
    </div>
  );
};

export default CardMessage;