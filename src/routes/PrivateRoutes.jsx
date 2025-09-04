import React from 'react';
import UseAuth from '../Hook/UseAuth/UseAuth';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading}=UseAuth();
    if(loading){
        <span className="loading loading-spinner loading-xl"></span>
    }

    if(!user){
        <Navigate to="login"></Navigate>
    }
    return children
};

export default PrivateRoutes;