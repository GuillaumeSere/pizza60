import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Pizza from '../components/Pizza';

const Homescreen = () => {

    const dispatch = useDispatch();

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasstate

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <div className='content'>
            <div className="row">
                {loading ? (
                   <Loading />
                ) : error ? (
                    <Error error='Il y a une erreur' />
                ) : (
                    pizzas.map((pizza) => {
                        return <div className="col-md-4 p-3" key={pizza._id}>
                                <Pizza pizza={pizza} />
                        </div>
                    })
                )}
            </div>
        </div>
    )
}

export default Homescreen;
