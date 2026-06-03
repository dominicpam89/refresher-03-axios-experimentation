import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { twClass } from '@/features/contact/utils/form.style';
import { useFieldContext } from '@/features/contact/context/form.context';
import { type ContactFormSchema } from '@/features/contact/types/form.type';

interface Props {
  id: string;
  placeholder: string;
  label?: string;
  description?: string;
}

export default function FieldTextArea<
  T extends ContactFormSchema[keyof ContactFormSchema],
>({ id, label, placeholder, description }: Props) {
  const field = useFieldContext<T>();
  return (
    <Field className={cn(twClass.field)}>
      {label && <FieldLabel htmlFor={id}>{id}</FieldLabel>}
      <Textarea
        id={id}
        placeholder={placeholder}
        rows={5}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value as T)}
        onBlur={() => field.handleBlur()}
      />
      {description && (
        <FieldDescription>
          {description.length > 0
            ? description
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          obcaecati eos tenetur sequi soluta necessitatibus.`}
        </FieldDescription>
      )}
      <FieldError errors={field.state.meta.errors} />
    </Field>
  );
}
