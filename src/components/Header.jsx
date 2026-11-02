import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-2xl bg-black text-white">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuhandler}
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://cdn-icons-png.flaticon.com/512/9451/9451364.png"
        ></img>
        <a href="/">
          <img
            className="h-18 -my-4 mx-2"
            alt="youtube-logo"
            src="https://images.unsplash.com/photo-1762340274205-06b6e0147640?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-15">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2 text-white"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 bg-gray-600 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 "
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/16785/16785804.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
