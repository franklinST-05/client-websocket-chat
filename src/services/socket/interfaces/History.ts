export interface HistoryReq {
  receiverId: number;
  size: number;
}

export interface HistoryRes {
  senderId: number;
  msg: string;
  date?: Date | null;
}