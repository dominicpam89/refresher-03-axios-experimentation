import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ProductType } from '@/type'; // your ProductType definition

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  // Handle image URL normalization (www → https)
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="shrink-0">
        <div className="flex justify-center p-4">
          <img src={product.image} alt={product.title} className="h-32 w-32 object-contain" />
        </div>
        <CardTitle className="line-clamp-2 text-lg">{product.title}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
        <p className="mt-2 font-semibold">${product.price}</p>
        <p className="text-xs text-muted-foreground capitalize">{product.category}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
