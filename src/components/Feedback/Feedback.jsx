export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedbackCounts,
  positiveCounter,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedbackCounts}</p>
      <p>Positive: {positiveCounter}%</p>
    </div>
  );
}
