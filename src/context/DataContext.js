import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [submitQuiz, setSubmitQuiz] = useState(false);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => data.results)
      .then((data) => setQuestions(data));

  }, [restartQuiz]);

  function hideLanding() {
    setStartQuiz((prevState) => !prevState);
  }

  function restart() {
    setStartQuiz((prevState) => !prevState);
    setRestartQuiz((prevState) => !prevState);
    setSubmitQuiz((prevState) => !prevState);
  }
  function quizSubmit() {
    setSubmitQuiz((prevState) => !prevState);
  }

  return (
    <DataContext.Provider
      value={{
        startQuiz, hideLanding, 
        questions, restart, submitQuiz, quizSubmit,
        restartQuiz,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
