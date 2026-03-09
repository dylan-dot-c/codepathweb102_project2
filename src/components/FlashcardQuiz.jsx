import Card from "./Card";
import questions from "../assets/questions";
import { useState } from "react";

const FlashcardQuiz = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [quiz] = useState(questions);
  const [isFlipped, setFlipped] = useState(false);

  const toggleCard = () => {
    setFlipped(!isFlipped);
  };

  // useEffect(() => {
  //     questions = questions.shuffle();
  // }, [])
  return (
    <div>
      <h4>Cards Remaining: {quiz.questions.length - currentCard}</h4>
      <Card
        current={currentCard}
        data={quiz.questions[currentCard]}
        show={isFlipped}
        toggleCard={toggleCard}
      ></Card>

      <br />
      <div className="buttons">
        <button
          disabled={currentCard === 0}
          onClick={() => {
            if (isFlipped) {
              setFlipped(false);
              // did it becasue it showed answer before question
              setTimeout(() => {
                setCurrentCard(currentCard - 1);
              }, 600);
            } else {
              setCurrentCard(currentCard - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          disabled={currentCard === quiz.questions.length - 1}
          onClick={() => {
            if (isFlipped) {
              setFlipped(false);
              // did it becasue it showed answer before question
              setTimeout(() => {
                setCurrentCard(currentCard + 1);
              }, 600);
            } else {
              setCurrentCard(currentCard + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardQuiz;
