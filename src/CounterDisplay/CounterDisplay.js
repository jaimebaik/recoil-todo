import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterSqaureSelector } from '../recoil/counterState';
const CounterDisplay = () => {
  const count = useRecoilValue(counterSqaureSelector);

  return (
    <div>
        <h3>{count}</h3>
    </div>
  );
};

export default CounterDisplay;