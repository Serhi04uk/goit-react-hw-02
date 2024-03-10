function Feedback({ stayt, total, procent }) {
  return (
    <>
      {!(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <p>No feedback yet</p>
      )}
      {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <p>Good: {stayt.good}</p>
      )}
      {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <p>Neutral: {stayt.neutral}</p>
      )}
      {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <p>Bad: {stayt.bad}</p>
      )}
      {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <p>Total: {total}</p>
      )}
      <p>
        {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) &&
          `Positive: ${procent}%`}
      </p>
    </>
  );
}

export default Feedback;
