// getServerSidePropsはpages routerの機能のため、App routerだと以下の通り

interface User {
  id: number;
  name: string;
}

export default async function getServerSide() {
  const data = await fetch("http://localhost:3000/api/users");
  const users: User[] = await data.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
