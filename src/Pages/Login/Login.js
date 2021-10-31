import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle, signInUsingEmail, errorMessage } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirectUrl);
        })
    }

    const handleEmailInput = event => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInUsingEmail(email, password)
            .then(result => {
                history.push(redirectUrl);
            })
        setError(errorMessage);
    }

    return (
        <div className="container mx-auto min-h-screen flex text-left">
            <div className="bg-green-400 p-10 xl:p-16 m-auto w-full xl:w-1/3 rounded-lg shadow-2xl">
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label className="block mb-2 text-lg font-semibold text-white" htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailInput} className="w-full py-2 border-none rounded" type="text" name="email" required />
                    </div>
                    <div className="py-4">
                        <label className="block mb-2 text-lg font-semibold text-white" htmlFor="password">Enter Password</label>
                        <input onBlur={handlePasswordInput} className="w-full py-2 border-none rounded" type="password" name="password" required />
                    </div>

                    <input className="px-6 py-2 bg-white hover:bg-black hover:text-white cursor-pointer rounded" type="submit" value="Submit" />
                    <div className="my-3"><p className="text-red-400">{error}</p></div>
                </form>
                <p className="text-white">New to OneCare? <NavLink className="underline hover:text-black" to="/signup">Sign Up</NavLink></p>
                <div className="mt-5">
                    <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2 hover:bg-white hover:text-black rounded"><FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;