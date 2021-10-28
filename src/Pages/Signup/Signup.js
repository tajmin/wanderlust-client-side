import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { signInUsingGoogle, signUpUsingEmail, errorMessage, updateUserInfo } = useAuth();
    const history = useHistory();
    const redirectUrl = '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirectUrl);
        })
    }

    const handleNameInput = event => {
        setName(event.target.value)
    }

    const handleEmailInput = event => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordInput = event => {
        setConfirmPassword(event.target.value)
    }

    const updateUserDetails = () => {
        updateUserInfo(name);
    }

    const handleSignup = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must contain at least 6 characters');
            return;
        }
        if (password === confirmPassword) {
            signUpUsingEmail(email, password)
                .then(result => {
                    history.push(redirectUrl);
                    updateUserDetails();
                })
            setError(errorMessage);
        } else {
            setError('Password and confirm password do not match')
        }
    }

    return (
        <div className="container mx-auto min-h-screen flex">
            <div className="bg-pink-400 p-8 xl:p-16 m-auto w-full xl:w-1/3">
                <form onSubmit={handleSignup}>
                    <div className="py-4">
                        <label className="block mb-2 font-bold text-white" htmlFor="name">Your Name</label>
                        <input onBlur={handleNameInput} className="w-full py-2" type="text" name="name" required />
                    </div>
                    <div className="py-4">
                        <label className="block mb-2 font-bold text-white" htmlFor="email">Your Email</label>
                        <input onBlur={handleEmailInput} className="w-full py-2" type="text" name="email" required />
                    </div>
                    <div className="py-4">
                        <label className="block mb-2 font-bold text-white" htmlFor="password">Enter Password</label>
                        <input onBlur={handlePasswordInput} className="w-full py-2" type="password" name="password" required />
                    </div>
                    <div className="py-4">
                        <label className="block mb-2 font-bold text-white" htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordInput} className="w-full py-2" type="password" name="confirmPassword" required />
                    </div>
                    <input className="px-6 py-1 bg-white hover:bg-black hover:text-white cursor-pointer" type="submit" value="Submit" />
                    <div className="my-3"><p className="text-red-400">{error}</p></div>
                </form>
                <p className="text-white">Already Registered? <NavLink className="underline hover:text-black" to="/login">Sign in</NavLink></p>
                <div className="mt-5">
                    <button onClick={handleGoogleLogin} className="px-8 bg-black text-white py-2 hover:bg-white hover:text-black">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;