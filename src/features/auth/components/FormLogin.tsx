import { Button } from '@/components/ui/button';
import FieldTextWithValidation from '@/components/field/FieldTextWithValidation';
import FieldPassword from '@/components/field/FieldPassword';
import { createFormHook } from '@tanstack/react-form';
import { fieldContext, formContext } from '@/context/form.context';
import {
  username,
  password,
  loginSchema,
  defaultValues,
} from '@/features/auth/schema/login.schema';
import { isUsernameExist } from '@/features/auth/api/mock.api';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FieldTextWithValidation,
    FieldPassword,
  },
  formComponents: {},
});

export default function FormLogin() {
  const form = useAppForm({
    defaultValues,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  return (
    <form
      name="form-login"
      className="flex flex-col gap-4 justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h1>Form Login</h1>
      <form.AppField
        name="username"
        validators={{
          onBlur: username,
          onChangeAsync: async ({ value }) => {
            const exist = await isUsernameExist(value, 500);
            if (!exist)
              return { message: "Username doesn't exist, please register" };
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
        validators={{ onChange: password, onBlur: password }}
        children={(field) => (
          <field.FieldPassword
            id="password"
            placeholder="Your Password"
            label="Password"
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
