import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import InputPassword from '@/components/inputs/InputPassword';
import InputText from '@/components/inputs/InputText';
import InputPhoneNumber from '@/components/inputs/InputPhoneNumber';
import { cn } from '@/lib/utils';

const defaultFieldSetClassName = 'border border-primary rounded-sm px-8 py-6';

export default function AuthRegisterForm() {
  return (
    <form>
      <FieldSet className={cn(defaultFieldSetClassName, 'mb-6')}>
        <FieldLegend className="text-lg font-extrabold">Primary Info</FieldLegend>
        <FieldDescription>Main Credentials, for authentication purposes</FieldDescription>
        <FieldGroup>
          <InputText
            inputProps={{ id: 'email', label: 'Email', placeholder: 'Your Email', type: 'email' }}
          />
          <InputPassword inputProps={{ label: 'Password', placeholder: 'Your Password' }} />
        </FieldGroup>
      </FieldSet>
      <FieldSet className={cn(defaultFieldSetClassName, 'mb-6')}>
        <FieldLegend>Contact Information</FieldLegend>
        <FieldDescription>Additional Contact Details</FieldDescription>
        <FieldGroup>
          <InputText
            inputProps={{ id: 'firstName', label: 'First Name', placeholder: 'Example: John' }}
          />
          <InputText
            inputProps={{
              id: 'middleName',
              label: 'Middle Name',
              placeholder: 'Example: Carpenter',
            }}
          />
          <InputText
            inputProps={{ id: 'lastName', label: 'Last Name', placeholder: 'Example: Doe' }}
          />
        </FieldGroup>
        <FieldSeparator />
        <FieldGroup>
          <InputPhoneNumber />
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
