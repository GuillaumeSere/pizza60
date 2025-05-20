import axios from 'axios';

const API_URL = process.env.REACT_APP_PUBLIC_API_URL || 'http://localhost:8000';

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {

    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    try {
        const response = await axios.post(`${API_URL}/orders/placeorder`, {token, subtotal, currentUser, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'})
        console.log(response)
    } catch (error) {
        dispatch({type: 'PLACE_ORDER_FAILED'})
        console.log(error)
    }
}

export const getUserOrders = () => async (dispatch, getstate) => {
    
    const currentUser = getstate().loginUserReducer.currentUser
    dispatch({type: 'GET_USER_ORDERS_REQUEST'})

    try{
        const response = await axios.post(`${API_URL}/orders/getuserorders`, {userid: currentUser._id})
        console.log(response)
        dispatch({type: 'GET_USER_ORDERS_SUCCESS', payload : response.data})
    } catch (error) {
        dispatch({type: 'GET_USER_ORDERS_FAILED', payload : error})
    }
}
