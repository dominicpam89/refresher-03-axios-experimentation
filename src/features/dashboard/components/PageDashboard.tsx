import { Button } from '@/components/ui/button';

export default function PageDashboard() {
  return (
    <div className="mx-auto mt-16 max-w-lg min-w-xs">
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <div className="flex gap-2">
        <Button variant="destructive">Logout</Button>
      </div>
    </div>
  );
}
