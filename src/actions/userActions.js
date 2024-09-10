import axios from 'axios';

export const registerUser = (user) => async dispatch => {

    dispatch({type: 'USER_REGISTER_REQUEST'})

    try {
      const response = await axios.post('https://web-production-a7dc.up.railway.app/users/register', user)
        dispatch({type: 'USER_REGISTER_SUCCESSS', payload: response})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}

export const loginUser = (user) => async dispatch => {

    dispatch({type: 'USER_LOGIN_REQUEST'})

    try {
      const response = await axios.post('https://web-production-a7dc.up.railway.app/users/login', user)
        dispatch({type: 'USER_LOGIN_SUCCESSS', payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href= '/'
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload: error})
    }
}

export const logoutUser = () => dispatch => {

    localStorage.removeItem('currentUser')
    window.location.href='/login'
}