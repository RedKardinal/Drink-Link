// Used to display Location by ID
const locationIdReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOCATION_ID':
            return action.payload;
        default:
            return state;
    }
  }; // end
  export default locationIdReducer;