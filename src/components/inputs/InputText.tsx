import { Input } from '@/components/ui/input';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';

type InputProps = {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: boolean;
};

interface Props {
  inputProps: InputProps;
}

export default function InputText({
  inputProps: { id, label, type = 'text', placeholder = '', autoComplete = false },
}: Props) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete ? 'on' : 'off'}
      />
      <FieldError>Email is required</FieldError>
    </Field>
  );
}
