import { Input } from '@/components/ui/input';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generateRandomString } from '@/lib/utils';
import { CircleXIcon } from 'lucide-react';

interface PhoneNumberCompProps {
  id: string;
  onRemove?: (id: string) => void;
}

export default function InputPhoneNumber() {
  const [listPhones, setListPhones] = useState<string[]>([]);
  const addPhone = () => {
    setListPhones((prev) => [...prev, generateRandomString()]);
  };
  const removePhone = (id: string) => {
    setListPhones((prev) => prev.filter((item) => item !== id));
  };
  return (
    <FieldGroup>
      <PhoneNumberComp id={generateRandomString()} />
      {listPhones.length > 0 &&
        listPhones.map((item) => <PhoneNumberComp key={item} id={item} onRemove={removePhone} />)}
      <Button type="button" onClick={addPhone}>
        Add Phone
      </Button>
    </FieldGroup>
  );
}

function PhoneNumberComp({ id, onRemove }: PhoneNumberCompProps) {
  return (
    <Field>
      <FieldLabel htmlFor={`phone-${id}`}>Phone Number</FieldLabel>
      <div className="flex items-center gap-2">
        <Input className="w-1/4" id={`countryCode-${id}`} type="number" placeholder="+78" />
        <Input className="w-full" id={`phone-${id}`} type="number" placeholder="Example: 5409801" />
        {typeof onRemove !== 'undefined' && (
          <Button type="button" onClick={onRemove.bind(null, id)}>
            <CircleXIcon size={16} />
          </Button>
        )}
      </div>
      <FieldError>Phone Number is error</FieldError>
    </Field>
  );
}
