import { Button } from '@/components/ui/button';
import FieldText from '@/components/field/FieldText';
import FieldTextWithValidation from '@/components/field/FieldTextWithValidation';
import FieldPassword from '@/components/field/FieldPassword';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '@/context/form.context';
import {
  defaultValues,
  registerSchema,
  email,
  username,
  password,
  passwordConfirmation,
} from '@/features/auth/schema/register.schema';
import { isEmailExist, isUsernameExist } from '@/features/auth/api/mock.api';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FieldText,
    FieldTextWithValidation,
    FieldPassword,
  },
  formComponents: {},
});

export default function FormRegister() {
  const form = useAppForm({
    defaultValues,
    onSubmit: ({ value }) => {
      console.log(value);
    },
    validators: {
      onSubmit: registerSchema,
    },
  });
  return (
    <form
      name="form-register"
      className="flex flex-col gap-4 justify-center pb-24"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h1>Form Register</h1>
      <form.AppField
        name="email"
        validators={{
          onBlur: email,
          onChangeAsync: async ({ value }) => {
            const exist = await isEmailExist(value, 600);
            if (exist) return { message: 'Email already taken, use another' };
            return undefined;
          },
          onChangeAsyncDebounceMs: 300,
        }}
        children={(field) => (
          <field.FieldTextWithValidation
            id="email"
            placeholder="Your Email"
            label="Email"
            validationText="checking email..."
          />
        )}
      />
      <form.AppField
        name="username"
        validators={{
          onBlur: username,
          onChangeAsync: async ({ value }) => {
            const exist = await isUsernameExist(value, 600);
            if (exist)
              return { message: 'Username has already taken, use another' };
            return undefined;
          },
          onChangeAsyncDebounceMs: 300,
        }}
        children={(field) => (
          <field.FieldTextWithValidation
            id="username"
            placeholder="Your Username"
            label="Username"
            validationText="checking username..."
          />
        )}
      />
      <form.AppField
        name="password"
        validators={{
          onBlur: password,
        }}
        children={(field) => (
          <field.FieldPassword
            id="password"
            placeholder="Your Password"
            label="Password"
          />
        )}
      />
      <form.AppField
        name="passwordConfirmation"
        validators={{
          onBlur: passwordConfirmation,
          onChangeAsync: async ({ value }) => {
            const passVal = form.getFieldValue('password');
            const passMeta = form.getFieldMeta('password');
            const passValid = passMeta?.isValid;
            if (passValid) {
              if (value !== passVal)
                return { message: 'must same with password' };
              return undefined;
            }
            return undefined;
          },
          onChangeAsyncDebounceMs: 300,
        }}
        children={(field) => (
          <field.FieldPassword
            id="password-confirmation"
            placeholder="Password Confirmation"
            label="Password Confirmation"
          />
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <div id="btn-group" className="w-full flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-1/2"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="w-1/2"
              disabled={!canSubmit || isSubmitting}
            >
              Login
            </Button>
          </div>
        )}
      />
    </form>
  );
}
