import { useState, useEffect } from "react";
import Landing from "./components/Landing";
import Questions from "./components/Questions";
import bottomBlob from "./bottom-blobs.png";
import topBlob from "./top-blobs.png";
import "./App.css";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium")
      .then((res) => res.json())
      .then((data) => data.results)
      .then(data => setQuestions(data))
  }, []);

  console.log(questions);
  function hideLanding() {
    setStartQuiz((prevState) => !prevState);
  }
  return (
    <div className="App">
      <img src={bottomBlob} alt="" className="bottom-blob" />
      <img src={topBlob} alt="" className="top-blob" />
      {!startQuiz && <Landing handleClick={hideLanding} />}
      {startQuiz && <Questions />}
    </div>
  );
}

export default App;
