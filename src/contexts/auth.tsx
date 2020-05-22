import React, { createContext, useState, useEffect, useContext } from "react";
import AuthContextData from "../domains/authContextData/AuthContextData.interface";
import api from '../services/api';
import * as auth from '../services/auth';
import User from "../domains/user/user.interface";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem('@Auth:user');
      const storagedToken = localStorage.getItem('@Auth:token');

      if (storagedUser && storagedToken) {
        // exemple the utilization with API for set token in headers
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStoragedData();
  }, [])

  async function signIn(userAuth: any) {
    setLoading(true);
    try {
      const response = await auth.signIn(userAuth);

      setUser(response.user);

      api.defaults.headers['Authorization'] = `Bearer ${response.token}`; // exemple the utilization with API for set token in headers

      localStorage.setItem('@Auth:user', JSON.stringify(response.user));
      localStorage.setItem('@Auth:token', response.token);
      setLoading(false);
    } catch(err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn, signOut, loading, errorMessage}}>
      {children}
    </AuthContext.Provider>
  )
}

// hook customized
export function useAuth() {
  return useContext(AuthContext);
}
