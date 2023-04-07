import Logo from "./Logo";
import Login from "../pages/Auth";

const Navbar = ({handleLoginClick}) => {
  
  const handleClick = () =>{
       handleLoginClick();
  } 

  return (
    <div className="navbar bg-base-200 drop-shadow-xl">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Logo />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">WhistleBlower</a>
      </div>
      <div className="flex-none justify-evenly w-1/4">
        <button className="btn btn-square btn-ghost">
          About
        </button>
        <button onClick={handleClick} className="btn btn-square btn-ghost">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
