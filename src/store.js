import { combineReducers } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'; // Utilise cette importation
import { getAllPizzasReducer } from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducer';
import { loginUserReducer, registerUserReducer } from './reducers/userReducer';
import { placeOrderReducer, getUserOrdersReducer } from './reducers/orderReducer';

// Combine all the reducers
const finalReducer = combineReducers({
    getAllPizzasReducer,
    cartReducer,
    registerUserReducer,
    loginUserReducer,
    placeOrderReducer,
    getUserOrdersReducer
});

// Check for localStorage items (optional)
const cartItems = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [];

const currentUser = localStorage.getItem('currentUser') 
    ? JSON.parse(localStorage.getItem('currentUser')) 
    : null;

const initialState = {
    cartReducer: {
        cartItems
    },
    loginUserReducer: {
        currentUser
    }
};

// Apply middleware
const middleware = [thunk];

// Create the store using composeWithDevTools directly
const store = createStore(
    finalReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // Use composeWithDevTools to wrap middleware
);

export default store;
