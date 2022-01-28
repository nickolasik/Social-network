import dialogsReducer from './reducers/Dialogs_Page_Reducer';
import profileReducer from './reducers/Profile_Page_Reducer';
import usersReducer from './reducers/Users_Page_Reducer';
import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;