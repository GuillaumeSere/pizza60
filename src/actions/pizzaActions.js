import { pizzas } from '../pizzadata';

export const getAllPizzas = () => async dispatch => {
    dispatch({type: 'GET_PIZZAS_REQUEST'})

    try {
        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: pizzas})
    } catch (error) {
        dispatch({type: 'GET_PIZZAS_FAILED', payload: error})
    }
}
