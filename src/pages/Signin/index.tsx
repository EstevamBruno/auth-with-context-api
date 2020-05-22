import React, {useState, FormEvent} from 'react';
import { useAuth } from '../../contexts/auth';

import { Container } from './styles';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validateForm, setValidateForm] = useState(false);
  const { signIn, loading, errorMessage } = useAuth();

  function submit(e: FormEvent) {
    e.preventDefault();
    setValidateForm(true);

    const userAuth = {email, password};

    if (!email || !password) return;

    signIn(userAuth);
    setValidateForm(false);
  }

  return (
    <Container>
      <h1>Auth Login</h1>
      <p>experience</p>
      <form onSubmit={(e: FormEvent) => submit(e)}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input autoFocus id="email" type="email"
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
          />
          {validateForm && !email && <small>E-mail is required!</small>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
          />
          {validateForm && !password && <small>Password is required!</small>}
        </div>
        <button type='submit'>{loading ? <i className='fa fa-spinner fa-pulse'></i> : 'Sign in'}</button>
        <small>{errorMessage}</small>
      </form>
    </Container>
  );

}

export default Signin;
