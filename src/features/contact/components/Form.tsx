import {
  contactFormSchema,
  defaultValues,
} from '@/features/contact/types/form.type';
import { useForm } from '@tanstack/react-form';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Form() {
  const form = useForm({
    defaultValues,
    onSubmit: (data) => {
      console.log(data.value);
    },
    validators: {
      onSubmit: contactFormSchema,
      onBlur: contactFormSchema,
      onChange: contactFormSchema,
    },
  });
  const twClass = {
    form: 'w-full flex flex-col gap-4',
    field: 'flex flex-col gap-1 w-full',
    btnContainer: 'w-full flex gap-2 items-center',
    btn: 'w-1/2 p-2 rounded-sm',
  };
  return (
    <form
      className={cn(twClass.form)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <h1>Contact Form</h1>
      <p className="paragraph-compact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        laudantium porro quis perferendis. Explicabo, eos atque sint accusantium
        aliquam, quis praesentium recusandae reiciendis totam repudiandae velit
        ab autem, voluptatibus dolores!
      </p>
      <Field className={cn(twClass.field)}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" />
        <FieldDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          obcaecati eos tenetur sequi soluta necessitatibus.
        </FieldDescription>
        <FieldError>Some Errors</FieldError>
      </Field>
      <Field className={cn(twClass.field)}>
        <FieldLabel htmlFor="user-text">Text</FieldLabel>
        <Textarea id="user-text" rows={5} />
        <FieldDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          obcaecati eos tenetur sequi soluta necessitatibus.
        </FieldDescription>
        <FieldError>Some Errors</FieldError>
      </Field>
      <FieldSeparator />
      <div className={cn(twClass.btnContainer)}>
        <Button
          type="button"
          className={cn(twClass.btn)}
          variant="outline"
          onClick={() => form.reset()}
        >
          Reset Field
        </Button>
        <Button type="submit" className={cn(twClass.btn)}>
          Send
        </Button>
      </div>
    </form>
  );
}
