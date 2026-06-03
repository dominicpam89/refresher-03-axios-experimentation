import {
  contactFormSchema,
  defaultValues,
  type ContactFormSchema,
} from '@/features/contact/types/form.type';
import { createFormHook } from '@tanstack/react-form';
import {
  fieldContext,
  formContext,
} from '@/features/contact/context/form.context';
import { FieldSeparator } from '@/components/ui/field';
import FieldText from './form/FieldText';
import FieldTextArea from './form/FieldTextArea';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { twClass } from '@/features/contact/utils/form.style';
import { useLoaderData, useNavigate } from '@tanstack/react-router';

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FieldText,
    FieldTextArea,
  },
  formComponents: {},
});

export default function Form() {
  const { axios } = useLoaderData({ from: '/contact' });
  const navigate = useNavigate();
  const form = useAppForm({
    defaultValues,
    onSubmit: async ({ value }) => {
      try {
        await axios.post('/posts', {
          title: value.email,
          body: value.message,
          userId: 1, // for simulation, placeholder data
        });
        alert('Form submitted successfully!');
        navigate({
          to: '/thankyou',
          replace: false,
        });
      } catch (error) {
        console.error(`Couldn't submit form, error: ${error}`);
        alert('Please try again.');
      }
    },
    validators: {
      onSubmit: contactFormSchema,
    },
  });
  const emailValidator = contactFormSchema.shape.email;
  const messageValidator = contactFormSchema.shape.message;
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
      <form.AppField
        name="email"
        validators={{
          onBlur: emailValidator,
          onChange: emailValidator,
        }}
        children={(field) => (
          <field.FieldText<ContactFormSchema['email']>
            id="Email"
            placeholder="Example: johndoe@example.com"
            type="email"
            description=""
            label="Your Email"
          />
        )}
      />
      <form.AppField
        name="message"
        validators={{
          onBlur: messageValidator,
          onChange: messageValidator,
        }}
        children={(field) => (
          <field.FieldTextArea<ContactFormSchema['message']>
            id="Message"
            placeholder="Your Message"
            label="Message"
            description=""
          />
        )}
      />
      <FieldSeparator />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <div className={cn(twClass.btnContainer)}>
            <Button
              type="button"
              className={cn(twClass.btn)}
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                form.reset();
              }}
            >
              Reset Field
            </Button>
            <Button
              type="submit"
              className={cn(twClass.btn)}
              disabled={!canSubmit || isSubmitting}
            >
              Send
            </Button>
          </div>
        )}
      />
    </form>
  );
}
