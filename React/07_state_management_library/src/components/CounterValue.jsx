import { useCounterStore } from "../store/counterStore.js";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);

  return <h2>Counter: {count}</h2>;
};

export default CounterValue;
