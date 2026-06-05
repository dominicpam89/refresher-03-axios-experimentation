import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { HTMLInputTypeAttribute } from 'react';
import { useFieldContext } from '@/context/form.context';

interface Props {
  label?: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  description?: string;
  validationText?: string;
}

export default function FieldTextWithValidation({
  label,
  id,
  type = 'text',
  placeholder,
  description,
  validationText,
}: Props) {
  const field = useFieldContext<string>();
  return (
    <Field className="w-full flex flex-col gap-2 justify-center">
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <div id="input-group" className="w-full relative">
        <Input
          className="w-full"
          id={id}
          type={type}
          placeholder={placeholder}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
        />
        {field.state.meta.isValidating && (
          <p className="paragraph-compact top-2 right-2 absolute">
            {validationText || 'checking...'}
          </p>
        )}
      </div>
      <FieldDescription className="paragraph-compact">
        {description ||
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid blanditiis maiores aut natus mollitia quis, et suscipit consectetur cupiditate dolorum? Culpa rem non, odio corporis quae voluptates dolorum ipsum.`}
      </FieldDescription>
      <FieldError errors={field.state.meta.errors} />
    </Field>
  );
}
