import { Input } from '@/components/ui/input';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostSchema, type CreatePostData } from '@/features/blog/schema';

export default function BlogCreateForm() {
  const { control, handleSubmit } = useForm<CreatePostData>({
    resolver: zodResolver(createPostSchema),
  });

  const onSubmit: SubmitHandler<CreatePostData> = ({ title, body }) => {
    console.log(title);
    console.log(body);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input
              {...field}
              id="title"
              placeholder="Title of Your Post"
              aria-invalid={fieldState.error ? 'true' : 'false'}
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />
      <Controller
        control={control}
        name="body"
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel htmlFor="body">Post</FieldLabel>
            <Input
              {...field}
              id="post"
              placeholder="Post anything you want here"
              aria-invalid={fieldState.error ? 'true' : 'false'}
            />
            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
          </Field>
        )}
      />
    </form>
  );
}
