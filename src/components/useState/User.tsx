import { useState } from "react";
import { UserType } from "../types/UserType";

function User() {
  const [user, setUser] = useState<UserType | null>(null); // <- Union Type

  const fetchUser = () => {
    setUser({
      name: "Marcy",
      age: 22,
      address: {
        street: "Bulati Avenue",
        city: "Lipa",
      },
      admin: false,
    });
  };

  return (
    <div>
      <button onClick={fetchUser}>Fetch the user</button>
      {user && <p>{user.name}</p>}
    </div>
  );
}

export default User;
