import Logo from "./Logo";

const Navbar = () => {
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
				<button className="btn btn-square btn-ghost">
					LogIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
