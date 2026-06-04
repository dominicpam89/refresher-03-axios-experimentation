import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { useCallback } from 'react';

export default function PageDashboard() {
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    localStorage.removeItem('token');
    navigate({ to: '/login', replace: true });
  }, [useNavigate]);
  return (
    <div className="mx-auto mt-16 max-w-lg min-w-xs">
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
      <code>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi,
        odit provident quod veniam placeat eius consequatur, sit natus
        perferendis facere, recusandae fugit quaerat. Suscipit possimus
        recusandae consequatur eius adipisci!
      </code>
      <div className="flex gap-2">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
