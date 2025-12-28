import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="/profile/123/details">Go to Profile</Link>
  </div>
);

export default Dashboard;
