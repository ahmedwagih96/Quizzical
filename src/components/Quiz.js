import { useContext } from "react";
import Question from "./Question";
import DataContext from "../context/DataContext";

const Quiz = () => {
  const { questions, restart, submitQuiz, quizSubmit } = useContext(DataContext);

  const exam = questions.map((quizQuestion, ind) => (
    <Question
      key={ind}
      quizQuestion={quizQuestion}
    />
  ));

  return (
    <div className="quiz">
      {exam}
      {!submitQuiz && (
        <button className="btn" onClick={quizSubmit}>
          Check Answers
        </button>
      )}
      {submitQuiz && (
        <div className="score-info">
          <button className="btn" onClick={restart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
