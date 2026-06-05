import { Button } from '@/components/ui/button';
import FieldText from '@/components/field/FieldText';
import FieldPassword from '@/components/field/FieldPassword';

export default function FormRegister() {
  return (
    <form name="form-login" className="flex flex-col gap-4 justify-center">
      <FieldText id="username" placeholder="Your Username" label="Username" />
      <FieldPassword
        id="password"
        placeholder="Your Password"
        label="Password"
      />
      <FieldPassword
        id="passwordConfirmation"
        placeholder="Password Confirmation"
        label="Password Confirmation"
      />
      <div id="btn-group" className="w-full flex gap-2">
        <Button type="button" variant="outline">
          Reset
        </Button>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
}
