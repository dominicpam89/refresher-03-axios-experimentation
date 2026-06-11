import { mockLogin } from '@/lib/api.mock';
import { type AuthContext } from '@/types/auth-context.type';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';

const authContext = createContext<AuthContext | null>(null);

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  });

  const login = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      try {
        const { token: newToken } = await mockLogin({ username, password });
        if (typeof window !== 'undefined') {
          return localStorage.setItem('token', newToken);
        }
        setToken(newToken);
      } catch (error) {
        throw error;
      }
    },
    []
  );

  const logout = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    setToken(null);
  }, []);

  const value = useMemo(
    () => ({ token, login, logout }),
    [token, login, logout]
  );

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  const ctx = useContext(authContext);
  if (!ctx) throw new Error('useAuth must be used inside authProvider');
  return ctx;
};
