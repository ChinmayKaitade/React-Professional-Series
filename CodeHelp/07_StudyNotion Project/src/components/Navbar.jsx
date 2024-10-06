import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      {/* nav links */}
      <nav>
        <ul className="flex gap-x-6 text-richblack-100 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Signup - Logout - Dashboard > conditions for buttons to appears on basis on user is loggedIn or not */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 font-semibold">
              Log In
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700 font-semibold">
              Sign Up
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/logout">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out Successfully 👍");
              }}
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700"
            >
              Logout
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
