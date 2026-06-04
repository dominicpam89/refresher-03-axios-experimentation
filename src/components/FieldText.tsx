import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useFieldContext } from '@/context/form.context';

interface Props {
  label?: string;
  id: string;
  description?: string;
}

export default function FieldText({ label, id, description }: Props) {
  const { state, handleChange, handleBlur } = useFieldContext<string>();
  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <Input
        id={id}
        type="text"
        value={state.value}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={() => handleBlur()}
      />
      <FieldDescription>
        {description ??
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
      deserunt quasi vel laudantium cupiditate sed sint modi adipisci eaque
      ullam quas enim expedita laborum ipsam quia placeat fuga. Quisquam,
      adipisci.`}
      </FieldDescription>
      {/* leave it for now */}
      <FieldError errors={state.meta.errors} />
    </Field>
  );
}
