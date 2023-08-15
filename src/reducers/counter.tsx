const counterReducer = (state: number = 0, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
