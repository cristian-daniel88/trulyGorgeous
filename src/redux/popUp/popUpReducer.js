import {HOVER_ABOUT, HOVER_ALTERATIONS, HOVER_WEDDING} from './popUpActions'

const INITIAL_STATE = {
  hover1: false,
  hover2: false,
  hover3: false
};

const hamburguerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    
    case HOVER_ABOUT:
      return {
        ...state,
        hover1: !state.hover1,
      };

    case HOVER_ALTERATIONS:
        return {
          ...state,
          hover2: !state.hover2,
        };

    case HOVER_WEDDING:
          return {
            ...state,
            hover3: !state.hover3,
          };
    default:
      return state;
  }
};

export default hamburguerReducer;
