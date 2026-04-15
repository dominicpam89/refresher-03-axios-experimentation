import { useParams } from 'react-router';

export default function PageBlogDetail() {
  const params = useParams();
  if (!params.id || isNaN(Number(params.id))) return <div>404 | No valid id</div>;
  return <div>PageBlogDetail: Page {params.id}</div>;
}
