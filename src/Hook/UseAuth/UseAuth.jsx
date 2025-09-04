import React, { use } from 'react';
import { AuthCotex } from '../../Contex/AuthContex/AuthContex';

const UseAuth = () => {
    const AuthInfo=use(AuthCotex);
    return AuthInfo;
};

export default UseAuth;