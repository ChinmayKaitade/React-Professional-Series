import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setIsLoggedIn(true);
    toast.success("Login Successfully 👍");
    navigate("/dashboard");

    console.log("Printing the form data");
    console.log(formData);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      {/* email */}
      <label className="w-full">
        <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>

        <input
          type="email"
          required
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="Enter Email Address"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
      </label>

      {/* password */}
      <label className="w-full relative">
        <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>

        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          name="password"
          onChange={changeHandler}
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />

        {/* eye icon for password */}
        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      {/* login btn */}
      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
