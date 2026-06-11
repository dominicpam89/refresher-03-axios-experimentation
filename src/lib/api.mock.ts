type LoginParam = {
  username: string;
  password: string;
  mockTime?: number;
};

type ProtectedDataParam = {
  mockTime?: number;
};

type LoginPromise = { token: string };
type ProtectedDataPromise = { data: string };

const mockLogin = ({ username, password, mockTime = 500 }: LoginParam) => {
  return new Promise<LoginPromise>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'johndoe' && password === 'pass')
        resolve({ token: 'fake-jwt' });
      else {
        reject({
          response: { status: 401, data: { message: 'Invalid Credentials' } },
        });
      }
    }, mockTime);
  });
};

const mockProtectedData = ({ mockTime = 500 }: ProtectedDataParam) => {
  return new Promise<ProtectedDataPromise>((resolve, reject) => {
    setTimeout(() => {
      const token = localStorage.getItem('token');
      token === 'fake-jwt'
        ? resolve({ data: 'Secret Dashboard Data' })
        : reject({ response: { status: 401 } });
    }, mockTime);
  });
};

export { mockLogin, mockProtectedData };
