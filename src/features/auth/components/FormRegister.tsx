import FieldText from '@/components/FieldText';
import FieldPassword from '@/components/FieldPassword';
import { Button } from '@/components/ui/button';
import { twClasses } from '@/features/auth/utils/form.style';
import { cn } from '@/lib/utils';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '@/context/form.context';
import { sch } from '@/features/auth/schema/login.schema';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FieldText,
    FieldPassword,
  },
  formComponents: {},
});

const { schema, isUsernameExist, mockExistingUsernames } = sch;
const { btn, btnGroup, form: formStyle } = twClasses;
const { defaultValues } = schema;

export default function FormRegister() {
  const form = useAppForm({
    defaultValues,
  });
  return (
    <form className={cn(formStyle)}>
      <h2>Form Register</h2>
      <form.AppField
        name="username"
        children={(field) => <field.FieldText id="username" label="Username" />}
      />
      <form.AppField
        name="password"
        children={(field) => (
          <field.FieldPassword
            id="password"
            label="Password"
            defaultShow={false}
          />
        )}
      />
      <form.AppField
        name="passwordConfirmation"
        children={(field) => (
          <field.FieldPassword
            id="password-confirmation"
            label="Password Confirmation"
            defaultShow={false}
          />
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <div id="btn-group" className={cn(btnGroup)}>
            <Button type="button" variant="outline" className={cn(btn)}>
              Reset
            </Button>
            <Button
              type="submit"
              className={cn(btn)}
              disabled={!canSubmit || isSubmitting}
            >
              Submit
            </Button>
          </div>
        )}
      />
    </form>
  );
}
