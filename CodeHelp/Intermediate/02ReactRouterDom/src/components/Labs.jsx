import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // move to HomePage
    navigate("/");
  };

  return (
    <div>
      <h1>Labs Page Here</h1>

      <button onClick={clickHandler} className="border border-black px-4 py-1">
        Move to HomePage
      </button>
    </div>
  );
};

export default Labs;
