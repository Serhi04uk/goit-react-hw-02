function Option({ stayt, updateFeedback }) {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <button onClick={updateFeedback}>Reset</button>
      )}
    </>
  );
}

export default Option;
