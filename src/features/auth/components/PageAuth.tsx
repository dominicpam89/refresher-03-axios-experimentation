import { useSearch } from '@tanstack/react-router';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

export default function PageAuth() {
  const { authType } = useSearch({ from: '/auth' });
  return authType === 'login' ? <FormLogin /> : <FormRegister />;
}
