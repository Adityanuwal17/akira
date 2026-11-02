import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      {isMenuOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
