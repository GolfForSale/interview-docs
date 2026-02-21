// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
// ═══════════════════════════════════════════════════════════════
// 🎯 DATA FETCHING WITH use() + SUSPENSE
// ═══════════════════════════════════════════════════════════════
// Use the React 19 `use` hook together with Suspense to fetch
// and display a list of users from the JSONPlaceholder API.
//
// Steps:
// 1. Create a promise that fetches users from the API
// 2. Use the `use` hook to unwrap the promise inside a component
// 3. Wrap the component in <Suspense> with a loading fallback
// ═══════════════════════════════════════════════════════════════
import { Suspense, use } from 'react';

type User = { name: string };

const UserList = () => {
  // 1. Create the fetch promise
  // 2. Use the `use` hook to read the data
  // 3. Render the list of user names

  return (
    <ul>
      {/* TODO: render user names */}
    </ul>
  );
};

const Fetching = () => {
  return (
    <div>
      {/* TODO: wrap UserList in Suspense with a fallback */}
      <UserList />
    </div>
  );
};

export default Fetching;
