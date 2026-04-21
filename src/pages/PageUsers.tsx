import { ErrorDisplay } from '@/components/ErrorDisplay';
import LoadingOverlay from '@/components/Loading';
import { useGetUsers } from '@/features/user/hook';
import UserCard from '@/features/user/components/UserCard';

export default function PageUsers() {
  const { data: users, isLoading, error } = useGetUsers();
  if (error || !users || users?.length === 0)
    return <ErrorDisplay errorMessage={error?.message || "Couldn't get users data"} />;
  if (isLoading) return <LoadingOverlay message="fetching users..." />;
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Platform Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
