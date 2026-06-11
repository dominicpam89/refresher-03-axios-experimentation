type LoginParam = {
  email: string;
  password: string;
};

export type AuthContext = {
  token: string | null;
  login: (param: LoginParam) => Promise<void>;
  logout: () => void;
};
