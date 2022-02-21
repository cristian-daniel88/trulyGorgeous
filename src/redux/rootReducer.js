
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hamburguerReducer from "./hamburguer/hamburguerReducer";
import popUpReducer from "./popUp/popUpReducer";
import sliderReducer from "./slider/sliderReducer";




const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
    hamburguer: hamburguerReducer,
    slider: sliderReducer,
    popUp: popUpReducer
});

export default persistReducer(persistConfig, rootReducer);
