import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardAction,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function PageThankyou() {
  return (
    <Card>
      <CardHeader>
        <CardAction>
          <Button asChild>
            <Link to="/">Back Home</Link>
          </Button>
        </CardAction>
        <CardTitle>
          <h2>Thank you!</h2>
        </CardTitle>
        <CardDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quos sed facere est tenetur laudantium rem, libero adipisci dolorum
            ipsum quia consequatur? Consectetur unde magnam explicabo provident
            ut cumque rem?
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your message has been sent successfully!</p>
      </CardContent>
    </Card>
  );
}
