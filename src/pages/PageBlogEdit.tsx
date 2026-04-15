import { useParams } from 'react-router';

export default function PageBlogEdit() {
  const params = useParams();
  if (!params.id || isNaN(Number(params.id))) return <div>404 | No valid id</div>;
  return <div>PageBlogEdit: Page {params.id}</div>;
}
