import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "../../context/AuthContext";

const DashboardHome = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <h1>DashboardHome</h1>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>  
    </>
  );
};



export default DashboardHome;
