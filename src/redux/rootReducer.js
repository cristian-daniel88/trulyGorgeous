
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hamburguerReducer from "./hamburguer/hamburguerReducer";




const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
    hamburguer: hamburguerReducer,
   
 

 
 
});

export default persistReducer(persistConfig, rootReducer);
