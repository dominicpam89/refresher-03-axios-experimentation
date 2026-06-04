import FieldUsername from '@/components/FieldUsername';
import FieldPassword from '@/components/FieldPassword';
import { Button } from '@/components/ui/button';
import { twClasses } from '@/features/auth/utils/form.style';
import { cn } from '@/lib/utils';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '@/context/form.context';
import { sch } from '@/features/auth/schema/auth.schema';
import { useLoaderData, useNavigate } from '@tanstack/react-router';

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
const {
  defaultValues: { register },
  password,
  passwordConfirmation,
  registerSchema,
} = schema;

export default function FormRegister() {
  const { axios } = useLoaderData({ from: '/register' });
  const navigate = useNavigate();
  const form = useAppForm({
    defaultValues: register,
    validators: {
      onSubmit: registerSchema,
      onChange: registerSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await axios.post('/auth/register', {
          username: value.username,
          password: value.password,
        });
        localStorage.setItem('token', response.data.token);
        navigate({ to: '/dashboard', replace: true });
      } catch (error) {
        console.error('register error', error);
        alert('Failed to register');
      }
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
