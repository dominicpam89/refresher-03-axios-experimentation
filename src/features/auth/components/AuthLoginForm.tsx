import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { AuthLoginFormType } from '@/types/auth-type';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';
import {
  useForm,
  type SubmitHandler,
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';

export default function AuthLoginForm() {
  const { control, handleSubmit } = useForm<AuthLoginFormType>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<AuthLoginFormType> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <UsernameComp<AuthLoginFormType>
        control={control}
        name="username"
        rules={{
          required: { value: true, message: 'Username is required' },
          minLength: { value: 5, message: 'Minimum username char is 5' },
          maxLength: { value: 30, message: 'Maximum username char is 30' },
        }}
      />
      <PasswordComp<AuthLoginFormType>
        control={control}
        name="password"
        rules={{ required: { value: true, message: 'Password is required' } }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

function UsernameComp<T extends FieldValues>(props: UseControllerProps<T>) {
  const { field, fieldState } = useController<T>(props);
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input {...field} id="username" autoComplete="off" placeholder="Your Username" />
      <FieldDescription>Some description on this field</FieldDescription>
      {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
    </Field>
  );
}

function PasswordComp<T extends FieldValues>(props: UseControllerProps<T>) {
  const [showPass, setShowPass] = useState(false);
  const handlePassButton = () => {
    setShowPass((t) => !t);
  };
  const { field, fieldState } = useController(props);
  return (
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <div className="flex gap-2">
        <Input
          {...field}
          id="password"
          autoComplete="off"
          placeholder="Your Password"
          type={showPass ? 'text' : 'password'}
        />
        <Button
          className="cursor-pointer"
          variant="ghost"
          size="icon-lg"
          type="button"
          onClick={handlePassButton}
        >
          {showPass ? <EyeClosedIcon /> : <EyeIcon />}
        </Button>
      </div>
      <FieldDescription>Some description on this field</FieldDescription>
      {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
    </Field>
  );
}
