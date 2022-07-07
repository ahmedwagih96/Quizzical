import { useContext } from "react";
import DataContext from "../context/DataContext";

const Landing = () => {
  const { hideLanding } = useContext(DataContext);
  return (
    <div className="landing">
      <h1>Quizzical</h1>
      <h3>Some description if needed</h3>
      <button onClick={hideLanding} className="btn">
        Start quiz
      </button>
    </div>
  );
};

export default Landing;
