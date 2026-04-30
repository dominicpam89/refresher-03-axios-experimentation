import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from '@/components/ui/field';
import InputPassword from '@/components/inputs/InputPassword';
import InputText from '@/components/inputs/InputText';
import { cn } from '@/lib/utils';
import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import type { AuthRegisterFormType } from '@/types/auth-type';

const defaultFieldSetClassName = 'border border-primary rounded-sm px-8 py-6';

export default function AuthRegisterForm() {
  const methods = useForm<AuthRegisterFormType>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      name: {
        firstName: '',
        middleName: '',
        lastName: '',
      },
      phoneNumber: [{ id: 1, countryCode: '', number: '' }],
    },
  });
  const { control, handleSubmit } = methods;

  const onSubmit: SubmitHandler<AuthRegisterFormType> = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet className={cn(defaultFieldSetClassName, 'mb-6')}>
          <FieldLegend className="text-lg font-extrabold">Primary Info</FieldLegend>
          <FieldDescription>Main Credentials, for authentication purposes</FieldDescription>
          <FieldGroup>
            <InputText
              hookProps={{ control: control, name: 'email' }}
              inputProps={{ id: 'email', label: 'Email', placeholder: 'Your Email', type: 'email' }}
            />
            <InputText
              hookProps={{ control: control, name: 'username' }}
              inputProps={{ id: 'username', label: 'Username', placeholder: 'Your Username' }}
            />
            <InputPassword inputProps={{ label: 'Password', placeholder: 'Your Password' }} />
          </FieldGroup>
        </FieldSet>
        <FieldSet className={cn(defaultFieldSetClassName, 'mb-6')}>
          <FieldLegend>Contact Information</FieldLegend>
          <FieldDescription>Additional Contact Details</FieldDescription>
          <FieldGroup>
            <InputText
              hookProps={{ control, name: 'name.firstName' }}
              inputProps={{ id: 'firstName', label: 'First Name', placeholder: 'Example: John' }}
            />
            <InputText
              hookProps={{ control, name: 'name.middleName' }}
              inputProps={{
                id: 'middleName',
                label: 'Middle Name',
                placeholder: 'Example: Carpenter',
              }}
            />
            <InputText
              hookProps={{ control, name: 'name.lastName' }}
              inputProps={{ id: 'lastName', label: 'Last Name', placeholder: 'Example: Doe' }}
            />
          </FieldGroup>
        </FieldSet>
      </form>
    </FormProvider>
  );
}
