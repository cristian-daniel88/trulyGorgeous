import { COUNTLESS, COUNTPLUS, COUNTPUT } from "./countActions";


const INITIAL_STATE = {
  count: 1,

 
};

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTPLUS:
      return {
        ...state,
        count: state.count + 1,
      };
      
    case COUNTLESS:
      return {
        ...state,
        count: state.count - 1,
      };

      case COUNTPUT:
        return {
          ...state,
          count: action.payload,
        };



    default:
      return state;
  }
};

export default countReducer;