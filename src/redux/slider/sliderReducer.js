import {HOVER_SLIDER, SLIDER_MANUAL } from "./sliderActions";

const INITIAL_STATE = {
  hover: false,
  slider: false,
};

const sliderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOVER_SLIDER:
      return {
        ...state,
        hover: action.payload,
      };
      
    case SLIDER_MANUAL:
      return {
        ...state,
        slider: true,
      };



    default:
      return state;
  }
};

export default sliderReducer;
