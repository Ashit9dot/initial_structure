import { Outlet, useLocation } from "react-router-dom";

const PublicLayout = () => {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  return (
    <div
      className={
        isAuthPage
          ? "min-h-screen bg-gray-100"
          : "min-h-screen bg-white"
      }
    >
      <Outlet />
    </div>
  );
};

export default PublicLayout;
