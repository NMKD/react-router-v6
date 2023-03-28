import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/users")}>Back to users</button>
    </>
  );
};

export default Profile;
