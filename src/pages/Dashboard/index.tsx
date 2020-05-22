import React from 'react';
import { useAuth } from '../../contexts/auth';

import { Container, Header } from './styles';
import { FaPowerOff } from 'react-icons/fa'

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Header>
        <p>Wellcome, {user?.name}</p>
      </Header>
      <Container>
        <div>
          <button type='button' onClick={() => handleSignOut()}><FaPowerOff size={34} color={'#fff'} /></button>
          <p>email: {user?.email}</p>
          <p>name: {user?.name}</p>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
