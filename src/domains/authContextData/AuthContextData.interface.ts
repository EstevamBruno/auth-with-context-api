import User from "../user/user.interface";
import UserAuth from "../user/userAuth.interface";

export default interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  errorMessage: string;
  signIn(user: UserAuth): Promise<void>;
  signOut(): void;
}
