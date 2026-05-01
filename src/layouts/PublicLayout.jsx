import { Outlet, useLocation } from "react-router-dom";

const PublicLayout = () => {
  const location = useLocation();
  console.log(location, "=====location");
  return (
    <>
      <div className="flex h-screen">
        <div className="w-full bg-black/5 flex flex-col items-center justify-center">
          <Outlet />
        </div>
        <div className="w-full bg-gray-500 text-center">Image</div>
      </div>
    </>
  );
};

export default PublicLayout;
