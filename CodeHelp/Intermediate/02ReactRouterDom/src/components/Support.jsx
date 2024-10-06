import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // move to Labs Page
    navigate("/labs");
  };

  const backHandler = () => {
    // move back
    navigate(-1);
  };

  return (
    <div>
      <h1>Support Page Here</h1>

      <button
        onClick={clickHandler}
        className="border border-black px-4 py-1 hover:bg-slate-600 hover:text-white transition-all duration-200"
      >
        Move to Labs Page
      </button>

      <button
        onClick={backHandler}
        className="border border-black px-4 py-1 ml-5 bg-slate-600 text-white hover:bg-white hover:text-slate-600 transition-all duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default Support;
