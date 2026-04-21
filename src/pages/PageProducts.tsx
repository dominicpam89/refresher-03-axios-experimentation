import { ErrorDisplay } from '@/components/ErrorDisplay';
import LoadingOverlay from '@/components/Loading';
import { ProductCard } from '@/features/product/components/ProductCard';
import { useGetProducts } from '@/features/product/hook';

export default function PageProducts() {
  const { data: products, error, isLoading } = useGetProducts();
  if (isLoading) return <LoadingOverlay />;
  if (error || !products) return <ErrorDisplay errorMessage={error?.message} />;
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
