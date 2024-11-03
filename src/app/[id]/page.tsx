export default async function GET({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const slug = (await params).id;
  return <div>My Post: {slug}</div>;
}
