import { decode } from "html-entities";
import { useState, useEffect, useContext } from "react";
import Answers from "./Answers";
import DataContext from "../context/DataContext";

const Question = ({ quizQuestion }) => {
  const { restartQuiz } = useContext(DataContext);
  
  useEffect(() => {
    setIsRightAnswer(false);
    setActiveAnswer(null);
  }, [restartQuiz]);

  const { question, incorrect_answers, correct_answer } = quizQuestion;
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState(null);
  const allAnswers = incorrect_answers.concat(correct_answer);
  const [shuffledAnswers, setShuffledAnswers] = useState(
    allAnswers.sort((a, b) => 0.5 - Math.random())
  );

  let answers = shuffledAnswers.map((answer, ind) => (
    <Answers
      key={ind}
      answer={decode(answer)}
      id={ind}
      handleClick={answerSelected}
      activeAnswer={activeAnswer}
      isRightAnswer={isRightAnswer}
      correctAnswer={correct_answer}
    />
  ));

  function answerSelected(value, id) {
    value === correct_answer ? setIsRightAnswer(true) : setIsRightAnswer(false);
    setActiveAnswer(id);
  }
  return (
    <div className="question">
      <h3 className="question-heading">{decode(question)}</h3>

      <div className="answers">{answers}</div>
      <hr />
    </div>
  );
};

export default Question;
