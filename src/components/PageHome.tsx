import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

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
      <Button asChild variant="link">
        <Link to="/contact">Contact</Link>
      </Button>
    </div>
  );
}
