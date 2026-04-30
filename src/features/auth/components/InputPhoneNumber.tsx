import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { AuthRegisterFormType } from '@/types/auth-type';
import { CircleXIcon } from 'lucide-react';
import { useFieldArray, useFormContext, type UseFieldArrayRemove } from 'react-hook-form';

const id = '1';

interface PhoneNumberFieldProps {
  index: number;
  remove: UseFieldArrayRemove;
}

export default function InputPhoneNumber() {
  const { control } = useFormContext<AuthRegisterFormType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phoneNumber',
  });
  return (
    <FieldGroup>
      {fields.map((field, index) => {
        return <PhoneNumberField key={field.id} index={index} remove={remove} />;
      })}
    </FieldGroup>
  );
}

function PhoneNumberField({ index, remove }: PhoneNumberFieldProps) {
  const { register } = useFormContext<AuthRegisterFormType>();
  return (
    <Field>
      <FieldLabel htmlFor={`phone-${index}`}>
        Phone Number {index === 0 ? 'Primary' : index}
      </FieldLabel>
      <div className="flex items-center gap-2">
        <Input
          className="w-1/4"
          id={`countryCode-${index}`}
          type="number"
          placeholder="+78"
          {...register(`phoneNumber.${index}.countryCode`)}
        />
        <Input
          className="w-full"
          id={`phone-${index}`}
          type="number"
          placeholder="Example: 5409801"
          {...register(`phoneNumber.${index}.number`)}
        />
        <Button type="button">
          <CircleXIcon size={16} />
        </Button>
      </div>
      <FieldError>Phone Number is error</FieldError>
    </Field>
  );
}
