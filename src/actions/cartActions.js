export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {

    let cartItem = {
        _id: pizza._id,
        name: pizza.name,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    }
    if (cartItem.quantity > 10 || cartItem.quantity < 0) {
        alert("Vous pouvez commander 1 à 10 pizzas par variétées")
    } else {
        dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    }

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {

    dispatch({ type: 'DELETE_FROM_CART', payload: pizza })
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}