import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

const Checkout = ({ subtotal }) => {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading, error, success} = orderstate
    const dispatch = useDispatch();

    const tokenHander = (token) => {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }

    return (
        <div>
            {loading && (<Loading />)}
            {error && (<Error error="Votre commande comporte une erreur" />)}
            {success && (<Success success="Votre commande est en préparation" />)}

            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHander}
                currency='EUR'
                stripeKey= {process.env.REACT_APP_PUBLISHABLE}
            >
                <button className='btn'>Payer</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout;