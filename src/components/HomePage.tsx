import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';

export default function HomePage() {
  return (
    <section id="home">
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <Button asChild>
        <Link to="/posts">Go to Posts</Link>
      </Button>
    </section>
  );
}
