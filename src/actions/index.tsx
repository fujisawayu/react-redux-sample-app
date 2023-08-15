export const increment = (number: number) => {
  return {
    type: 'INCREMENT',
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const login = () => {
  return {
    type: 'CHANGE',
  };
};
