import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { decreaseByNo, decrement, increaseByNo, increment, toggleCounter } from '../../redux/CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>COUNTER VALUE = {counterValue}</div>
      <div>
        <button className={classes.btn} onClick={() =>dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button className={classes.btn} onClick={() =>dispatch(increaseByNo(10))}>Increase by 10</button>
        <button onClick={() => dispatch(decreaseByNo(5))}>Decrease by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
