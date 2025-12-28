import { Routes, Route, useParams, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

const Profile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile Page - User {userId}</h1>

      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>
          Details
        </Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
