import axios from 'axios';
import { resetCart } from './cartActions';

const API_URL = process.env.REACT_APP_PUBLIC_API_URL || 'http://localhost:8000';

export const registerUser = (user) => async dispatch => {

    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
      const response = await axios.post(`${API_URL}/users/register`, user)
        dispatch({type: 'USER_REGISTER_SUCCESS', payload: response.data})
        window.location.href = '/login'
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}

export const loginUser = (user) => async dispatch => {

    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
      const response = await axios.post(`${API_URL}/users/login`, user)
        dispatch({type: 'USER_LOGIN_SUCCESSS', payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href= '/'
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload: error})
    }
}

export const logoutUser = () => dispatch => {
    dispatch(resetCart())
    localStorage.removeItem('currentUser')
    window.location.href='/login'
}
