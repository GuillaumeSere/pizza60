import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

const Loginscreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginstate = useSelector(state => state.loginUserReducer)
    const {loading, error} = loginstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('currentUser')){
            window.location.href= '/'
        }
    }, [])

    const login = () => {
        const user = {email, password}
        dispatch(loginUser(user))
    }

    return (
        <div className='bg-content'>
            <div className="row title-register">
                <div className="col-md-5">
                    <h2>Connexion</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='mot de passe ou email invalide' />)}
                    <div>
                        <input
                            type="email"
                            placeholder='email'
                            className='form-control'
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                        />
                        <input
                            type="password"
                            placeholder='mot de passe'
                            className='form-control'
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                            required
                        />
                        <button className='btn mt-5' onClick={login}>VALIDER</button>
                        <a href="/register" style={{display: 'flex', marginTop: '1rem', color: 'black', justifyContent: 'center'}}>Cliquez ici pour vous inscrire</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loginscreen;