import { v4 } from 'uuid';

export const generateNewDogData = () => {
  return {
    name: v4(),
    color: 'black',
    tail_length: 10,
    weight: 15,
  };
};