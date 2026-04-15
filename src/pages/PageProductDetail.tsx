import { useParams } from 'react-router';

export default function PageProductDetail() {
  const params = useParams();
  if (!params.id || isNaN(Number(params.id))) return <div>404 | No valid id</div>;
  return <div>PageProductDetail: Page {params.id}</div>;
}
