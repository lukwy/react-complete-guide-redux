import { useDispatch, useSelector } from 'react-redux';

import { counerActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counerActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counerActions.increse(10));
  };

  const decrementHandler = () => {
    dispatch(counerActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counerActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
