import { NavLink, Outlet, useNavigate } from "react-router-dom";
const UserIdLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li>
          <NavLink to={`profile`}> Profile this user</NavLink>
        </li>
        <li>
          <NavLink to={`edit`}> Edit this user</NavLink>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>
            <NavLink>NavLink to users list</NavLink>
          </button>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default UserIdLayout;
