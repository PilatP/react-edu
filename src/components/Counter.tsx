import { useCallback, useState } from 'react';

interface ICounterProps {
  initialValue: number;
  onIncrease?(): void;
  onDecrease?(n: number): void;
}

const Counter = ({
  initialValue,
  onIncrease,
  onDecrease,
  ...rest
}: ICounterProps) => {
  const [counter, setCounter] = useState(initialValue);

  const handleOnDecrease = useCallback(() => {
    if (onDecrease) onDecrease(counter - 1);
    if (counter > 0) setCounter(counter - 1);
  }, [onDecrease, counter]);

  return (
    <div>
      <div {...rest}>Counter {counter}</div>
      <button
        onClick={() => {
          if (onIncrease) {
            onIncrease();
            onIncrease();
          }
          setCounter(counter + 2);
        }}
      >
        +
      </button>
      <button onClick={handleOnDecrease}>-</button>
    </div>
  );
};

export { Counter };
