export interface User {
    id: number;
    name: string;
    username: string;
    role: string;
    email: string;
    discord: string;
    created_at: Date;
  }
  
  export interface UserData {
    name: string;
    username: string;
    role: string;
    email: string;
    discord: string;
  }