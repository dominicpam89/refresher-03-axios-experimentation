import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { EyeOffIcon, EyeIcon } from 'lucide-react';

interface Props {
  label?: string;
  id: string;
  placeholder: string;
  description?: string;
  defaultShowPass?: boolean;
}

export default function FieldText({
  label,
  id,
  placeholder,
  description,
  defaultShowPass = false,
}: Props) {
  const [showPass, setShowPass] = useState<boolean>(defaultShowPass);
  const toggleShowPass = () => {
    setShowPass((val) => !val);
  };
  return (
    <Field className="w-full flex flex-col gap-2 justify-center">
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <div id="input-group" className="relative w-full">
        <Input
          id={id}
          type={showPass ? 'text' : 'password'}
          placeholder={placeholder}
        />
        <Button
          size="icon"
          type="button"
          variant="ghost"
          onClick={toggleShowPass}
          className="absolute top-1 right-2"
        >
          {showPass ? <EyeOffIcon /> : <EyeIcon />}
        </Button>
      </div>
      <FieldDescription>
        {description ||
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid blanditiis maiores aut natus mollitia quis, et suscipit consectetur cupiditate dolorum? Culpa rem non, odio corporis quae voluptates dolorum ipsum.`}
      </FieldDescription>
      <FieldError>Set later on</FieldError>
    </Field>
  );
}
