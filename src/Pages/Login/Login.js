import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

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
        <div className="container mx-auto min-h-screen flex">
            <div className="bg-pink-400 p-8 xl:p-16 m-auto w-full xl:w-1/3">
                <form onSubmit={handleLogin}>
                    <div className="">
                        <label className="block mb-2 font-bold text-white" htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailInput} className="w-full py-2" type="text" name="email" required />
                    </div>
                    <div className="py-4">
                        <label className="block mb-2 font-bold text-white" htmlFor="password">Enter Password</label>
                        <input onBlur={handlePasswordInput} className="w-full py-2" type="password" name="password" required />
                    </div>
                    <input className="px-6 py-1 bg-white hover:bg-black hover:text-white cursor-pointer" type="submit" value="Submit" />
                    <div className="my-3"><p className="text-red-400">{error}</p></div>
                </form>
                <p className="text-white">New to OneCare? <NavLink className="underline hover:text-black" to="/signup">Sign Up</NavLink></p>
                <div className="mt-5">
                    <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2 hover:bg-white hover:text-black">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;