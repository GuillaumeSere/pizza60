import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';

const Cartscreen = () => {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    let subtotal = cartItems.reduce((x, item) => x + item.price , 0)
    const dispatch = useDispatch()

    return (
        <div className='bg-content'>
            <div className='row justify-content-center title-cart'>
                <div className="col-md-6">
                    <h2 style={{ fontSize: "40px", marginBottom: "2rem" }}> Votre commande</h2>

                    {cartItems.map((item, index) => {
                        return <div className="flex-container" key={index}>

                            <div className='text-left m-1 w-100'>
                                <h1>- 🍕 - <mark>{item.name} / {item.varient}</mark> </h1>
                                <h1>Prix : {item.quantity} X {item.prices[0][item.varient]} = {item.price} €</h1>
                                <h1 style={{ display: "inline" }}>Quantité : </h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => {dispatch(addToCart(item, item.quantity + 1, item.varient))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa-solid fa-minus" aria-hidden="true" onClick={() => {dispatch(addToCart(item, item.quantity - 1, item.varient))}}></i>
                                <hr />
                            </div>

                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ height: '80px', width: '80px', borderRadius:'50%' }} alt="" />
                            </div>

                            <div className='m-1 w-100'>
                                <i className="fa fa-trash" aria-hidden="true" onClick={() => {dispatch(deleteFromCart(item))}}></i>
                            </div>

                        </div>
                    })}

                </div>

                <div className='col-md-4' >
                    <h2 style={{fontSize: '40px'}}>Total : {subtotal} €</h2>
                    <Checkout subtotal={subtotal} />
                </div>
            </div>
        </div>

    )
}

export default Cartscreen;