import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';

export default function PageHome() {
  return (
    <div className="mx-auto mt-16 max-w-lg min-w-xs">
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <Button asChild>
        <Link to="/auth?register">Get Started</Link>
      </Button>
    </div>
  );
}
