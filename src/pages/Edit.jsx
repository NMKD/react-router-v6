import { useParams, NavLink } from "react-router-dom";

const Edit = () => {
  const { userId } = useParams();

  const getNextUser = (param) => {
    const id = Number(param) + 1;
    return `/users/${id}`;
  };
  return (
    <>
      <h1>Edit</h1>

      <ul>
        <li>
          <NavLink to={`/users/${userId}`}>User Profile</NavLink>
        </li>
        <li>
          <NavLink to={getNextUser(userId)}>Another User</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users list page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Edit;
