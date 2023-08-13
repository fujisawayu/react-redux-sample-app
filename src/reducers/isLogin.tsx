const isLoginReducer = (state: boolean = false, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
