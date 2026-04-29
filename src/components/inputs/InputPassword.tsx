import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

type InputProps = {
  defaultShowPass?: boolean;
  label: string;
  placeholder: string;
};

interface Props {
  inputProps: InputProps;
}

export default function InputPassword({
  inputProps: { defaultShowPass = false, label, placeholder },
}: Props) {
  const [showPass, setShowPass] = useState<boolean>(defaultShowPass);
  const onToggleShowPass = () => {
    setShowPass((prevShowPass) => !prevShowPass);
  };
  return (
    <Field>
      <FieldLabel htmlFor="password">{label}</FieldLabel>
      <div className="flex items-center gap-2">
        <Input id="password" type={showPass ? 'text' : 'password'} placeholder={placeholder} />
        <Button size="icon" type="button" onClick={onToggleShowPass}>
          {showPass ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
        </Button>
      </div>
      <FieldError>
        Password must be contains at least 8 characters long, contains both letter and number, and
        minimum one symbol
      </FieldError>
    </Field>
  );
}
