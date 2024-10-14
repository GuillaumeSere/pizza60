import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

const Ordersscreen = () => {

    const dispatch = useDispatch();
    const ordersstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = ordersstate

    useEffect(() => {
        dispatch(getUserOrders())
    }, [])

    return (
        <div className='bg-content'>
            <div className="row mt-5 sm-8 md-5 lg-5 xl-5 title-order">
                <h2 style={{ fontSize: '35px', textAlign:'center' }}>Ma Commande</h2> <hr/>
                {loading && (<Loading />)}
                {error && (<Error error="une erreur est survenu" />)}
                {orders && orders.map((order, index) => {
                    return <div key={index} style={{background: 'white', borderRadius: '.5rem'}}>
                        <div className="flex-container order">
                            <div style={{marginTop: '1rem'}}>
                                <h2 style={{ fontSize: '25px' }}>Mes Pizzas</h2><hr/>
                                {order.orderItems.map((item, index) => {
                                    return <div key={index}>
                                        <h1>{item.quantity} {item.name} [{item.varient}] = {item.price} €</h1>
                                    </div>
                                })}
                            </div>
                            <div style={{marginTop: '1rem'}}>
                                <h2 style={{ fontSize: '25px' }}>Adresse</h2><hr/>
                                <h1> {order.shippingAddress.street}</h1>
                                <h1> {order.shippingAddress.pincode}</h1>
                                <h1> {order.shippingAddress.city}</h1>
                                <h1> {order.shippingAddress.country}</h1>
                            </div>
                            <div style={{ marginTop: '1rem'}}>
                                <h2 style={{ fontSize: '25px' }}>Info commande</h2><hr/>
                                <h1> Numéro de commande : {order.orderAmount}</h1>
                                <h1>Date : {order.createdAt.substring(0,10)}</h1>
                                <h1>Transaction Id : {order.transactionId}</h1>
                                <h1>Order Id : {order._id}</h1>
                            </div>
                        </div><br/><hr/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Ordersscreen;