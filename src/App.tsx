import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './contexts/auth'

import Routes from './routes'
import GlobalStyle from './styles/global/global';

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyle />
          <Routes />
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
