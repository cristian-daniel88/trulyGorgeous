
import { CLICK_POPUPPHOTO } from "./popUpPhotoDesignerActions";

const INITIAL_STATE = {
  hidden: false,
  imgUrl:'' 
};

const popUpDesignerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLICK_POPUPPHOTO:
      return {
        ...state,
        hidden: action.payload2,
        imgUrl: action.payload
      };


    default:
      return state;
  }
};

export default popUpDesignerReducer;
