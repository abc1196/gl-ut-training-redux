import React from 'react';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from './counterSlice';
import styles from './Counter.module.css';
import { useCounterData } from './hooks/useCounterData';

export const Counter = () => {
  const { count, dispatch, incrementAmount, incrementValue, setIncrementAmount } = useCounterData();

  const handleDecrementButtonClick = () => dispatch(decrement());

  const handleIncrementAmountChange = (event) => setIncrementAmount(event.target.value);

  const handleIncrementAmountButtonClick = () => dispatch(incrementByAmount(incrementValue));

  const handleIncrementAsyncButtonClick = () => dispatch(incrementAsync(incrementValue));

  const handleIncrementButtonClick = () => dispatch(increment());

  const handleIncrementIfOddButtonClick = () => dispatch(incrementIfOdd(incrementValue));

  return (
    <div data-testid='counter-container'>
      <div className={styles.row}>
        <button
          className={styles.button}
          data-testid='decrement-button'
          aria-label='Decrement value'
          onClick={handleDecrementButtonClick}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          data-testid='increment-button'
          aria-label='Increment value'
          onClick={handleIncrementButtonClick}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          data-testid='amount-input'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={handleIncrementAmountChange}
        />
        <button
          className={styles.button}
          data-testid='increment-input-button'
          onClick={handleIncrementAmountButtonClick}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          data-testid='increment-async-button'
          onClick={handleIncrementAsyncButtonClick}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          data-testid='increment-odd-button'
          onClick={handleIncrementIfOddButtonClick}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
