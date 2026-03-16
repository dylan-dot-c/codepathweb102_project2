import Card from "./Card";
import questions from "../assets/questions";
import { useState } from "react";

const FlashcardQuiz = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [quiz, setQuiz] = useState(questions.questions);
  const [isFlipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const shuffleQuestions = () => {
    let copyQuestions = quiz.slice();
    console.log(copyQuestions, copyQuestions.length);

    for (let i = 0; i < copyQuestions.length; i++) {
      let temp = copyQuestions[i];
      let randIndex = Math.floor(Math.random() * copyQuestions.length);

      copyQuestions[i] = copyQuestions[randIndex];
      copyQuestions[randIndex] = temp;
    }

    setQuiz(copyQuestions);
    setAnswer("");
    setAttempted(false);
    setCorrect(false);
    setFlipped(false);
    setCurrentCard(0);
  };
  const toggleCard = () => {
    if (attempted == false) {
      alert("Atleast try before you see the answer");
    } else {
      setFlipped(!isFlipped);
    }
  };

  const checkAnswer = (question, answer) => {
    console.log(question, answer);
    let correctAnswer = question.back.toLocaleLowerCase();
    answer = answer.toLocaleLowerCase();

    if (correctAnswer == answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }

    setAttempted(true);
  };

  const nextCard = () => {
    if (attempted) {
      if (isFlipped) {
        setFlipped(false);
        // did it becasue it showed answer before question
        setTimeout(() => {
          setCurrentCard(currentCard + 1);
        }, 600);
      } else {
        setCurrentCard(currentCard + 1);
      }
      setAttempted(false);
      setCorrect(false);
      setAnswer("");
    } else {
      alert("Please try before moving on!");
    }
  };

  const prevCard = () => {
    if (isFlipped) {
      setFlipped(false);
      // did it becasue it showed answer before question
      setTimeout(() => {
        setCurrentCard(currentCard - 1);
      }, 600);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <div>
      <h4>Cards Remaining: {quiz.length - currentCard}</h4>
      <Card
        current={currentCard}
        data={quiz[currentCard]}
        show={isFlipped}
        toggleCard={toggleCard}
      ></Card>

      <br />

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          checkAnswer(quiz[currentCard], answer);
        }}
      >
        <label htmlFor="answer">Guess: </label>
        <input
          type="text"
          name="answer"
          id="answer"
          placeholder="I think the answer is..."
          value={answer}
          className={`${attempted ? (correct ? "correct" : "incorrect") : ""}`}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="buttons">
        <button disabled={currentCard === 0} onClick={prevCard}>
          Prev
        </button>
        <button disabled={currentCard === quiz.length - 1} onClick={nextCard}>
          Next
        </button>
        <br />
        <button onClick={shuffleQuestions}>Shuffle</button>
      </div>
    </div>
  );
};

export default FlashcardQuiz;
