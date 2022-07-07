import DataContext from "../context/DataContext";
import { useContext } from "react";

const Answers = ({id, answer, handleClick, activeAnswer, isRightAnswer, correctAnswer}) => {
  const {submitQuiz} = useContext(DataContext);
  let styles;
  if(submitQuiz){
    if(answer === correctAnswer){
      styles = {backgroundColor: "#94D7A2"};
    }
    if(activeAnswer === id){
      if(isRightAnswer){
        styles = {backgroundColor: "#94D7A2"}
      }else{
        styles = {backgroundColor: "#F8BCBC"}
      }
    }
  }else{
    if(activeAnswer === id){
      styles = {backgroundColor: "#D6DBF5"}
    }
  }
  return ( 
  <div 
  onClick = {(e)=>handleClick(e.target.textContent, id)} 
  style={styles} 
  className="answer">{answer} 
  </div> );
}
 
export default Answers;