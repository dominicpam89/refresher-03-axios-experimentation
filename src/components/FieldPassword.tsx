import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { EyeOffIcon, EyeIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useFieldContext } from '@/context/form.context';

interface Props {
  label?: string;
  id: string;
  description?: string;
  defaultShow: boolean;
}

export default function FieldPassword({
  label,
  id,
  description,
  defaultShow = false,
}: Props) {
  const { state, handleChange, handleBlur } = useFieldContext<string>();
  const [showPass, setShowPass] = useState<boolean>(defaultShow);
  const toggleShowPass = () => {
    setShowPass((val) => !val);
  };
  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <div id="input-group" className="relative w-full">
        <Input
          id={id}
          type={showPass ? 'text' : 'password'}
          value={state.value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
        />
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0"
          onClick={toggleShowPass}
        >
          {showPass ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </Button>
      </div>
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
