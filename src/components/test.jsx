import { useState, useEffect } from "react";

function Modal({ stayt }) {
  // useEffect(() => {
  return `Total: ${stayt.good + stayt.bad + stayt.neutral}`;
  // }, [stayt]);
}

function Feed() {
  const [stayt, save] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const changeGood = () => {
    save({
      good: stayt.good + 1,
      neutral: stayt.neutral,
      bad: stayt.bad,
    });
  };
  const changeNeutral = () => {
    save({
      good: stayt.good,
      neutral: stayt.neutral + 1,
      bad: stayt.bad,
    });
  };
  const changeBad = () => {
    save({
      good: stayt.good,
      neutral: stayt.neutral,
      bad: stayt.bad + 1,
    });
  };
  const clian = () => {
    save({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <button onClick={changeGood}>Good</button>
      <button onClick={changeNeutral}>Neutral</button>
      <button onClick={changeBad}>Bad</button>
      {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) && (
        <button onClick={clian}>Reset</button>
      )}

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
        <p>
          {" "}
          <Modal stayt={stayt} />
        </p>
      )}

      <p>
        {(stayt.good > 0 || stayt.neutral > 0 || stayt.bad > 0) &&
          `Positive: ${Math.round(
            ((stayt.good + stayt.neutral) /
              (stayt.good + stayt.bad + stayt.neutral)) *
              100
          )}%`}
      </p>
    </>
  );
}

export default Feed;
