import { Suspense, use } from 'react';

type User = { name: string };

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const UserList = () => {
  const users = use<User[]>(fetchUsers);

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {users.map(user => (
        <li key={user.name} style={{
          padding: '8px 12px',
          borderBottom: '1px solid #334155',
          color: '#e2e8f0',
          fontSize: 14,
        }}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default function FetchingSolution() {
  return (
    <div>
      <Suspense fallback={
        <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>Loading users...</p>
      }>
        <UserList />
      </Suspense>
    </div>
  );
}
