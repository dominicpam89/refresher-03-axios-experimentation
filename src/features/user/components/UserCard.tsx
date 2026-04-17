import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { UserType } from '@/type'; // your ProductType definition

interface UserCardProps {
  user: UserType;
}

export default function UserCard({ user }: UserCardProps) {
  // Handle image URL normalization (www → https)
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="shrink-0">
        <div className="flex justify-center p-4">
          <img src={user.image} alt={user.firstName} className="h-32 w-32 object-contain" />
        </div>
        <CardTitle className="line-clamp-2 text-lg">{user.lastName}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{user.username}</p>
        <p className="mt-2 font-semibold">${user.company.name}</p>
        <p className="text-xs text-muted-foreground capitalize">{user.company.title}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
