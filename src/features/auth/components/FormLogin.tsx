import FieldUsername from '@/components/FieldUsername';
import FieldPassword from '@/components/FieldPassword';
import { Button } from '@/components/ui/button';
import { twClasses } from '@/features/auth/utils/form.style';
import { cn } from '@/lib/utils';
import { fieldContext, formContext } from '@/context/form.context';
import { createFormHook } from '@tanstack/react-form';
import { sch } from '@/features/auth/schema/auth.schema';

const {
  schema: {
    loginSchema,
    defaultValues: { login },
  },
  isUsernameExist,
} = sch;
const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: { FieldUsername, FieldPassword },
  formComponents: {},
});

export default function FormLogin() {
  const form = useAppForm({
    defaultValues: login,
    validators: {
      onSubmit: loginSchema,
      onChange: loginSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });
  const { btn, btnGroup, form: formStyle } = twClasses;
  return (
    <form
      className={cn(formStyle)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h2>Form Login</h2>
      <form.AppField
        name="username"
        validators={{
          onChangeAsync: async ({ value }) => {
            const exist = await isUsernameExist(value);
            if (!exist)
              return { message: "username doesn't exist, please Register" };
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
        children={(field) => (
          <field.FieldPassword
            id="password"
            label="Password"
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
