const isLoginReducer = (state: boolean = false, action: any) => {
  switch (action.type) {
    case 'CHANGE':
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
