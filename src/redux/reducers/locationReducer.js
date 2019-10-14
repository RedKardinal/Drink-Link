const shelfReducer = (state = [], action) => {
    console.log(state);
    console.log(action.payload);
    switch (action.type) {
      case 'SET_SHELF':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default shelfReducer;