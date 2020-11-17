import { atom, selector } from 'recoil';

const counterState = atom({
  key: 'counterState',
  default: 0
});

const counterSqaureSelector = selector({
  key: 'counterSquareSelector',
  get: ({get}) => {
   return get(counterState) ** 2;
  }
});

export { counterState, counterSqaureSelector };