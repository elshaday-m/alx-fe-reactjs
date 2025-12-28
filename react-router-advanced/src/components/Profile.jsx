import { Outlet, useParams, Link } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile Page - User {userId}</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Profile;
