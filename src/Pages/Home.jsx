import React from "react";

import UsersList from "../components/UsersList";

const Home = ({ loadUsers, users }) => {
  return (
    <div>
      <UsersList loadUsers={loadUsers} users={users} />
    </div>
  );
};

export default Home;
