import React from 'react';

const AuthContext = React.createContext({isLoggedIn: false, login: () => {}})

export default AuthContext;