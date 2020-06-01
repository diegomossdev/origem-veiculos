import * as React from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import {nameToStorage} from '../helpers';

interface UserData {
  id: Number;
  name: string;
  email: string;
  admin: Boolean;
}
interface AuthContextDate {
  signed: boolean;
  user: UserData | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
};

const AuthContext = React.createContext<AuthContextDate>({} as AuthContextDate);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<UserData | null>(null);

  React.useEffect(() => {
    function loadStoragedDate() {
      const storagedUser = localStorage.getItem(`@${nameToStorage}:user`);
      const storagedToken = localStorage.getItem(`@${nameToStorage}:token`);

      if(storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));

        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      };
    };

    loadStoragedDate();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await auth.signIn(email, password);

    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    localStorage.setItem(`@${nameToStorage}:user`, JSON.stringify(response.user));
    localStorage.setItem(`@${nameToStorage}:token`, response.token);
  };

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;