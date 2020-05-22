import User from "../user/user.interface";

export interface AuthResponse {
  token: string;
  user: User
}
