import { useParams } from '@tanstack/react-router';

export default function PageAbout() {
  const { id } = useParams({ from: '/about/$id' });
  return (
    <div className="mx-auto mt-16 max-w-lg min-w-xs">
      <h1>Page About</h1>
      <h4>Page ID: {id}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        necessitatibus. Consectetur ullam, obcaecati, non dolorum magnam
        architecto dolores totam consequuntur quam suscipit provident vel libero
        animi nihil, illum labore aut?
      </p>
    </div>
  );
}
