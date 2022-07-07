import {useContext } from "react";
import Landing from "./components/Landing";
import Quiz from "./components/Quiz";
import bottomBlob from "./bottom-blobs.png";
import topBlob from "./top-blobs.png";
import "./App.css";
import DataContext from "./context/DataContext";

function App() {
  const { startQuiz } = useContext(DataContext);

  return (
    <div className="app">
        <img src={bottomBlob} alt="" className="bottom-blob" />
        <img src={topBlob} alt="" className="top-blob" />
        <div className="container">
          {!startQuiz && <Landing />}
          {startQuiz && <Quiz/> }
        </div>
    </div>
  );
}

export default App;
