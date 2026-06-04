import FieldUsername from '@/components/FieldUsername';
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
    FieldUsername,
    FieldPassword,
  },
  formComponents: {},
});

const { schema, isUsernameExist } = sch;
const { btn, btnGroup, form: formStyle } = twClasses;
const { defaultValues, password, passwordConfirmation, loginSchema } = schema;

export default function FormRegister() {
  const form = useAppForm({
    defaultValues,
    validators: {
      onSubmit: loginSchema,
      onChange: loginSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <form
      className={cn(formStyle)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h2>Form Register</h2>
      <form.AppField
        name="username"
        validators={{
          onChangeAsync: async ({ value }) => {
            const taken = await isUsernameExist(value);
            if (taken) return { message: 'username is taken' };
            return undefined;
          },
          onChangeAsyncDebounceMs: 300,
        }}
        children={(field) => (
          <field.FieldUsername id="username" label="Username" />
        )}
      />
      <form.AppField
        name="password"
        validators={{ onBlur: password, onChange: password }}
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
        validators={{
          onBlur: passwordConfirmation,
          onChange: passwordConfirmation,
        }}
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
