import { NavLink, Outlet } from "react-router-dom";
const UsersLaout = () => {
  return (
    <>
      <h2> NavLink to user page</h2>
      <h3>
        <NavLink to="/">NavLink to home page</NavLink>
      </h3>
      <Outlet />
    </>
  );
};

export default UsersLaout;
