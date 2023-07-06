export interface User {
  id: number;
  name: string;
  online: boolean;
  lastLogin: Date | null;
}