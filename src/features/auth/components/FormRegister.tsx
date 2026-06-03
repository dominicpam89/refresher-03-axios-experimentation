import FieldText from '@/components/FieldText';
import FieldPassword from '@/components/FieldPassword';
import { Button } from '@/components/ui/button';
import { twClasses } from '@/features/auth/utils/form.style';
import { cn } from '@/lib/utils';

export default function FormRegister() {
  const { btn, btnGroup, form: formStyle } = twClasses;
  return (
    <form className={cn(formStyle)}>
      <h2>Form Register</h2>
      <FieldText id="username" label="Username" />
      <FieldPassword id="password" label="Password" defaultShow={false} />
      <FieldPassword
        id="password-confirmation"
        label="Password Confirmation"
        defaultShow={false}
      />
      <div id="btn-group" className={cn(btnGroup)}>
        <Button type="button" variant="outline" className={cn(btn)}>
          Reset
        </Button>
        <Button type="submit" className={cn(btn)}>
          Submit
        </Button>
      </div>
    </form>
  );
}
