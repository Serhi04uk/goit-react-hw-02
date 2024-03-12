function Feedback({ feedback, total, positiveFeedbackPercentage }) {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </>
  );
}

export default Feedback;
