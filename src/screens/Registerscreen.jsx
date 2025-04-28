import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { registerUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

const Registerscreen = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const registerstate = useSelector(state => state.registerUserReducer)
    const {error, loading, success} = registerstate

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if (password !== cpassword){
            alert("Les mots de passe ne sont pas identiques")
            return;
        }
        if (!name || !email || !password) {
            alert("Veuillez remplir tous les champs")
            return;
        }
        const user = {
            name,
            email,
            password
        }
        dispatch(registerUser(user))
    }

    return (
        <div className='bg-content'>
            <div className="row title-register">
                <div className="col-md-5">
                    {loading && (<Loading />)}
                    {success && (<Success success='Utilisateur enregistré avec succès' />)}
                    {error && (<Error error={error.response?.data?.message || 'Une erreur est survenue lors de l\'inscription'} />)}
                    <h2 className='text-center'>INSCRIPTION</h2>
                    <form onSubmit={register}>
                        <input
                            type="text"
                            placeholder='nom'
                            className='form-control'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required
                        />
                        <input
                            type="email"
                            placeholder='email'
                            className='form-control'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <input
                            type="password"
                            placeholder='mot de passe'
                            className='form-control'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />
                        <input
                            type="password"
                            placeholder='confirme mot de passe'
                            className='form-control'
                            value={cpassword}
                            onChange={(e) => { setCpassword(e.target.value) }}
                            required
                        />
                        <button type="submit" className='btn mt-5'>VALIDER</button>
                        <a href="/login" style={{display: 'flex', marginTop: '1rem', color: 'black', justifyContent: 'center'}}>Cliquez ici pour vous identifier</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registerscreen;