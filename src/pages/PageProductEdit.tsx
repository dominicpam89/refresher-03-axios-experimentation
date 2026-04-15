import { useParams } from 'react-router';

export default function PageProductEdit() {
  const params = useParams();
  if (!params.id || isNaN(Number(params.id))) return <div>404 | No valid id</div>;
  return <div>PageProductEdit: Page {params.id}</div>;
}
