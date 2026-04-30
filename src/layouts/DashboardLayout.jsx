import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
