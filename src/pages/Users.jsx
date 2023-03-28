import { NavLink } from "react-router-dom";

const Users = () => {
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <ul>
        {users.map((item) => (
          <li key={item}>
            <NavLink to={`${item}`}> User {item}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
