import AuthLoginForm from '@/features/auth/components/AuthLoginForm';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router';

const tabs = {
  login: 'auth-login-form',
  register: 'auth-register-form',
} as const;
type TabType = typeof tabs.login | typeof tabs.register;

const buttonVariant = (tab: string | null, t: TabType) => {
  return tab === t ? 'default' : 'outline';
};

export default function PageFormExperimentation() {
  const [params, setParams] = useSearchParams();
  const tab = params.get('tab');
  const variant = buttonVariant.bind(null, tab);

  const onAuthLoginForm = () => {
    setParams(`?tab=${tabs.login}`);
  };
  const onAuthRegisterForm = () => {
    setParams(`?tab=${tabs.register}`);
  };

  return (
    <div className="flex flex-col gap-2 max-w-sm mx-auto pt-12">
      <div aria-label="tabs" className="flex gap-1">
        <Button variant={variant('auth-login-form')} onClick={onAuthLoginForm}>
          Auth Login Form
        </Button>
        <Button variant={variant('auth-register-form')} onClick={onAuthRegisterForm}>
          Auth Register Form
        </Button>
      </div>
      {tab === tabs.login && <AuthLoginForm />}
    </div>
  );
}
