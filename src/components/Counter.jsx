const Counter = (props) => {
  const button = props.counters.map((elem, index) => {
    const decrement = () => {
      const newTabDecrement = [...props.counters];
      newTabDecrement[index] = newTabDecrement[index] - 1;
      props.setCounters(newTabDecrement);
    };

    const increment = () => {
      const newTabIncrement = [...props.counters];
      newTabIncrement[index] = newTabIncrement[index] + 1;
      props.setCounters(newTabIncrement);
    };
    const reset = () => {
      const newTabReset = [...props.counters];
      newTabReset[index] = 0;
      props.setCounters(newTabReset);
    };
    return (
      <div key={index}>
        {elem > 0 && <button onClick={decrement}>-</button>}
        {elem}
        {elem < 10 && <button onClick={increment}>+</button>}
        {elem !== 0 && (
          <button type="reset" onClick={reset}>
            {" "}
            Reset
          </button>
        )}
      </div>
    );
  });
  return <div>{button}</div>;
};

export default Counter;
