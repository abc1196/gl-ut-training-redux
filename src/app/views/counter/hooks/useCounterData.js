// vendors
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// selectors
import { selectCount } from '../counterSelectors';

const INITIAL_AMOUNT = 2;

export const useCounterData = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(INITIAL_AMOUNT);

  return {
    count,
    dispatch,
    incrementAmount,
    incrementValue: Number(incrementAmount) || 0,
    setIncrementAmount,
  };
};
