import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home page</h1>
      <NavLink to="/users">Users list</NavLink>
    </>
  );
};

export default Home;
