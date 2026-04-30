import { Input } from '@/components/ui/input';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { type UseControllerProps, type FieldValues, useController } from 'react-hook-form';

type InputProps = {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: boolean;
};

interface Props<T extends FieldValues> {
  inputProps: InputProps;
  hookProps: UseControllerProps<T>;
}

export default function InputText<T extends FieldValues>({
  inputProps: { id, label, type = 'text', placeholder = '', autoComplete = false },
  hookProps,
}: Props<T>) {
  const { field, fieldState } = useController<T>(hookProps);
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete ? 'on' : 'off'}
        {...field}
      />
      {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
    </Field>
  );
}
