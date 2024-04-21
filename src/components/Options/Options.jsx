import css from "./Options.module.css";

export default function Options({ onUpdateFeedback, onResetFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      <button onClick={onResetFeedback}>Reset</button>
    </div>
  );
}
