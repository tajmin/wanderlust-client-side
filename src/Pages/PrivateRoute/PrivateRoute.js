import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import spinner from '../../images/spin.gif'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    //spinner
    if (loading) {
        return (
            <div>
                <div className="bg-gray-100">
                    <img className="mx-auto" src={spinner} alt="" />
                </div>
            </div>
        );
    }

    return (
        <Route {...rest}
            render={({ location }) => user.email ? children : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;