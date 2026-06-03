import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { twClass } from '@/features/contact/utils/form.style';

interface Props {
  id: string;
  placeholder: string;
  label?: string;
  description?: string;
}

export default function FieldTextArea({
  id,
  label,
  placeholder,
  description,
}: Props) {
  return (
    <Field className={cn(twClass.field)}>
      {label && <FieldLabel htmlFor={id}>Email</FieldLabel>}
      <Textarea id={id} placeholder={placeholder} rows={5} />
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
