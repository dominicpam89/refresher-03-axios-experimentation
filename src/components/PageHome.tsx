import { Button } from './ui/button';
import { Link } from '@tanstack/react-router';

export default function PageHome() {
  return (
    <section id="homepage" className="w-full">
      <h1>Page Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <div className="flex gap-2">
        <Button asChild>
          <Link to="/auth" search={{ authType: 'login' }}>
            Get Started
          </Link>
        </Button>
      </div>
    </section>
  );
}
