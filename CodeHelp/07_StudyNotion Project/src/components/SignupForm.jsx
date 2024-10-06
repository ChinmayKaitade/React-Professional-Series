import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password does not match 😓");
    }

    setIsLoggedIn(true);
    toast.success("Account Created Successfully 👍");

    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };

    console.log("Printing final data...");
    console.log(finalData);

    navigate("/dashboard");
  };

  return (
    <div>
      {/* student instructor tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-4 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-1 px-4 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>

        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-1 px-4 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstName and lastName */}
        <div className="w-full flex gap-x-4 mt-[10px]">
          {/* firstName */}
          <label className="w-full">
            <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>

            <input
              type="text"
              required
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
            />
          </label>

          {/* lastName */}
          <label className="w-full">
            <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>

            <input
              type="text"
              required
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
            />
          </label>
        </div>

        {/* email */}
        <div className="mt-[10px]">
          <label className="w-full">
            <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>

            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter Email Address"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
            />
          </label>
        </div>

        {/* createPassword and confirmPassword */}
        <div className="w-full flex gap-x-4 mt-[10px]">
          {/* create password */}
          <label className="w-full relative">
            <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
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
          </label>

          {/* confirm password */}
          <label className="w-full relative">
            <p className="text-[0.87rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[10px]"
            />

            {/* eye icon for password */}
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        {/* create a/c btn */}
        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[10px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
