import { Input } from '@/components/ui/input';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';

export default function inputPhoneNumber() {
  return (
    <Field>
      <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
      <div className="flex items-center gap-2">
        <Input className="w-1/4" id="countryCode" type="number" placeholder="Example: +78" />
        <Input className="w-full" id="phone" type="number" placeholder="Example: 5409801" />
      </div>
      <FieldError>Phone Number is error</FieldError>
    </Field>
  );
}
