import { AuthResponse } from "../domains/authResponse/AuthResponse.interface";
import UserAuth from "../domains/user/userAuth.interface";

export function signIn(user: UserAuth): Promise<AuthResponse> {
  const emailValidate: string = 'auth@email.com';
  const passwordValidate: string = '123456';

  if (user.email !== emailValidate) {
    throw new Error('E-mail invalid!');
  } else if (user.password !== passwordValidate) {
    throw new Error('Password invalid!');
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          token: 'koakdasijhtnaslsdkjdshaegfoodasadewrasdsad',
          user: {
            email: 'auth@email.com',
            name: 'Auth User',
          },
        });
      }, 2_000);
    });
  }
}
