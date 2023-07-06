export interface MessageReq {
  receiverId: number;
  msg: string;
}

export interface MessageRes {
  senderId: number;
  msg: string;
  date?: Date | string;
}