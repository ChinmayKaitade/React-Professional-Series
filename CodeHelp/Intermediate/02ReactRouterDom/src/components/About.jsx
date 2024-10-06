import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // move to Support Page
    navigate("/support");
  };

  return (
    <div>
      <h1>About Page Here</h1>

      <button onClick={clickHandler} className="border border-black px-4 py-1">
        Move to Support Page
      </button>
    </div>
  );
};

export default About;
