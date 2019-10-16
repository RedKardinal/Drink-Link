const locationReducer = (state = [], action) => {
    // console.log(action.payload);
    // console.log(state);
    switch (action.type) {
      case 'SET_LOCATION':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default locationReducer;