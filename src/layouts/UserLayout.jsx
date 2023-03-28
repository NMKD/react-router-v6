import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <h1>User page</h1>
      <Outlet />
    </>
  );
};

export default UserLayout;
