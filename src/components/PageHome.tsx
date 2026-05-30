import { Button } from './ui/button';
import { Link } from '@tanstack/react-router';

export default function PageHome() {
  return (
    <section id="home" className="flex flex-col gap-2 w-full">
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <Button asChild variant="link">
        <Link to="/posts">Posts</Link>
      </Button>
    </section>
  );
}
