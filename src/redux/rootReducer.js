
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import countReducer from "./count/countReducer";

import hamburguerReducer from "./hamburguer/hamburguerReducer";
import popUpReducer from "./popUp/popUpReducer";
import popUpDesignerReducer from "./popUpPhotoDesigner/popUpPhotoDesignerReducer";
import sliderReducer from "./slider/sliderReducer";




const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
    hamburguer: hamburguerReducer,
    slider: sliderReducer,
    popUp: popUpReducer,
    popUpDesigner: popUpDesignerReducer,
    count:countReducer
   
});

export default persistReducer(persistConfig, rootReducer);
