import css from "./Options.module.css";

export default function Options({
  onUpdateFeedback,
  onResetFeedback,
  resetDisabled,
}) {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      <button
        onClick={onResetFeedback}
        style={{ display: resetDisabled ? "none" : "" }}
      >
        Reset
      </button>
    </div>
  );
}
