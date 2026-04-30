import { Outlet } from "react-router-dom";
import Logo from "../assets/ak.jpg"

const PublicLayout = () => {
  return (
    <>
      {/* <header>Public Navbar</header> */}
      <div className="flex justify-center">
        <img src={Logo} width={70} className="rounded-lg" />
      </div>
      <Outlet />
    </>
  );
};

export default PublicLayout;
