import { Button } from '@/components/ui/button';
import { Field, FieldLabel, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import type { AuthRegisterFormType } from '@/types/auth-type';
import { CircleXIcon, PlusIcon } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

export default function InputPhoneNumber() {
  const { control } = useFormContext<AuthRegisterFormType>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phoneNumber', // expects: phoneNumber: Array<{ countryCode: string; number: string }>
  });

  const addPhoneNumber = () => {
    append({ countryCode: '', number: '' });
  };

  return (
    <div className="space-y-4">
      <FieldGroup>
        {fields.map((field, index) => (
          <PhoneNumberField key={field.id} index={index} onRemove={() => remove(index)} />
        ))}
      </FieldGroup>
      <Button type="button" variant="outline" onClick={addPhoneNumber}>
        <PlusIcon size={16} className="mr-2" />
        Add phone number
      </Button>
    </div>
  );
}

interface PhoneNumberFieldProps {
  index: number;
  onRemove: () => void;
}

function PhoneNumberField({ index, onRemove }: PhoneNumberFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<AuthRegisterFormType>();

  // Build error paths
  const countryCodeError = errors.phoneNumber?.[index]?.countryCode;
  const numberError = errors.phoneNumber?.[index]?.number;

  return (
    <Field>
      <FieldLabel>Phone Number {index + 1}</FieldLabel>
      <div className="flex items-center gap-2">
        {/* Country code input */}
        <Input
          className="w-1/4"
          type="text"
          placeholder="+1"
          {...register(`phoneNumber.${index}.countryCode`, {
            required: 'Country code is required',
          })}
        />
        {/* Phone number input */}
        <Input
          className="w-full"
          type="tel"
          placeholder="Example: 5409801"
          {...register(`phoneNumber.${index}.number`, {
            required: 'Phone number is required',
          })}
        />
        <Button type="button" variant="ghost" size="icon" onClick={onRemove}>
          <CircleXIcon size={16} />
        </Button>
      </div>
      {/* Display specific errors */}
      {countryCodeError && <FieldError>{countryCodeError.message}</FieldError>}
      {numberError && <FieldError>{numberError.message}</FieldError>}
    </Field>
  );
}
