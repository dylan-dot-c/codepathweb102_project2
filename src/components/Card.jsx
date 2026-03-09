import barcaImg from "../assets/barcelona.png";

const Card = ({ data, show, toggleCard }) => {
  const { front, back, difficulty } = data;

  return (
    <div
      className={`flip-card ${show ? "flipped" : ""}`}
      onClick={() => toggleCard()}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className={`difficulty ${difficulty}`}>
            {difficulty === "easy" && (
              <img width={20} src={barcaImg} alt="barcelona logo" />
            )}
            {difficulty === "medium" && (
              <>
                <img width={20} src={barcaImg} alt="barcelona logo" />
                <img width={20} src={barcaImg} alt="barcelona logo" />
              </>
            )}
            {difficulty === "hard" && (
              <>
                <img width={20} src={barcaImg} alt="barcelona logo" />
                <img width={20} src={barcaImg} alt="barcelona logo" />
                <img width={20} src={barcaImg} alt="barcelona logo" />
              </>
            )}
          </div>
          <p>{front}</p>
        </div>
        <div className="flip-card-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
