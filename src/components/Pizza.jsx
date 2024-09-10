import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import { addToCart } from '../actions/cartActions';

const Pizza = ({ pizza }) => {

    const [quantity, setQuantity] = useState(1);
    const [varient, setVarient] = useState('small');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const addtocart = () => {
        dispatch(addToCart(pizza, quantity, varient))
    }

    return (
        <div style={{ margin: "100px" }} className="shadow-lg p-3 mb-5 rounded">

            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} alt="pizza" />
            </div>

            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p>Formats</p>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {pizza.varients.map((varient, id) => {
                            return <option key={id} value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className='w-100 m-1'>
                    <p>Quantité</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option key={x} value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Prix : {pizza.prices[0][varient] * quantity} €</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className="btn" onClick={addtocart}>Ajouter</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='modul'>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} style={{height: "400px"}} className="img-fluid" alt="pizza" />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer className='modul'>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Pizza;