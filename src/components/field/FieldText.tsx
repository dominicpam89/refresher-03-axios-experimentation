import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { HTMLInputTypeAttribute } from 'react';

interface Props {
  label?: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  description?: string;
}

export default function FieldText({
  label,
  id,
  type = 'text',
  placeholder,
  description,
}: Props) {
  return (
    <Field className="w-full flex flex-col gap-2 justify-center">
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Input id={id} type={type} placeholder={placeholder} />
      <FieldDescription>
        {description ||
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid blanditiis maiores aut natus mollitia quis, et suscipit consectetur cupiditate dolorum? Culpa rem non, odio corporis quae voluptates dolorum ipsum.`}
      </FieldDescription>
      <FieldError>Set later on</FieldError>
    </Field>
  );
}
