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

export default function FieldUsername({ label, id, description }: Props) {
  const { state, handleChange, handleBlur } = useFieldContext<string>();
  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <div id="input-group" className="relative w-full">
        <Input
          id={id}
          type="text"
          value={state.value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => handleBlur()}
        />
        {state.meta.isValidating && (
          <span className="paragraph-compact absolute top-0 right-0 mt-2 mr-2">
            checking username...
          </span>
        )}
      </div>
      <FieldDescription>
        {description ??
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
      deserunt quasi vel laudantium cupiditate sed sint modi adipisci eaque
      ullam quas enim expedita laborum ipsam quia placeat fuga. Quisquam,
      adipisci.`}
      </FieldDescription>
      <FieldError errors={state.meta.errors} />
    </Field>
  );
}
