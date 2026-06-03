import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { twClass } from '@/features/contact/utils/form.style';

interface Props {
  id: string;
  type: HTMLInputElement['type'];
  placeholder: string;
  label?: string;
  description?: string;
}

export default function FieldText({
  id,
  type,
  label,
  placeholder,
  description,
}: Props) {
  return (
    <Field className={cn(twClass.field)}>
      {label && <FieldLabel htmlFor={id}>Email</FieldLabel>}
      <Input id={id} type={type} placeholder={placeholder} />
      {description && (
        <FieldDescription>
          {description.length > 0
            ? description
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          obcaecati eos tenetur sequi soluta necessitatibus.`}
        </FieldDescription>
      )}
      <FieldError>Some Errors</FieldError>
    </Field>
  );
}
