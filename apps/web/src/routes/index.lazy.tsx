import { createLazyFileRoute } from '@tanstack/react-router';

import { trpc } from '@/utils/trpc';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const query = trpc.hello.get.useQuery({ name: 'Jonas' });

  return <p className="text-xl">Message: {query.data?.message}</p>;
}
