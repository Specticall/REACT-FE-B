type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export default function Counter({ count, setCount }: Props) {
  // let count = 0;

  return (
    <div className="counter">
      <button
        className="counter-btn"
        onClick={function () {
          // count = count - 1;
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <p className="counter-content">{count}</p>
      <button
        className="counter-btn"
        onClick={function () {
          // count = count + 1;
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
