import React, { useEffect, useState } from "react";
import SuggestedUser from "./SuggestedUser";

type UserProps = {
  id: string;
  name: string;
  profileURI: string;
};

const SuggestedUsers = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {

    // Example
    const fetchUsers = async () => {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();

      const formattedUsers = data.results.map((user: any) => ({
        id: user.login.uuid,
        name: `${user.login.username}`,
        profileURI: user.picture.thumbnail,
      }));

      setUsers(formattedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <>
      {users.map((person) => (
        <SuggestedUser
          key={person.id}
          name={person.name}
          profileURI={person.profileURI}
        />
      ))}
    </>
  );
};

export default SuggestedUsers;