"use client";
import { isToday } from "@/utils/date";
import React from "react";

interface TimeIndicatorProps {
    date: Date | number | string;
}

const TimeIndicator: React.FC<TimeIndicatorProps> = ({ date }) => {

  const convertedDate = new Date(date);
  const formatter = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  
  return (
    <div className="block w-max text-center mx-auto !my-6 px-2 py-1 bg-container/40 text-white/60 rounded-md select-none">
      <time className="text-xs testicky top-0xt-gray-400">
        {isToday(convertedDate) ? "Hoje" : formatter.format(convertedDate)}
      </time>
    </div>
  );
};

export default TimeIndicator;