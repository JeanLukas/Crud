import React, { Component, useState } from 'react';
import {Route, Redirect } from 'react-router-dom'
import Form from '../Form';

const Routes = ({component : COmponent, ...rest}) => {
    const {users} = useState(Form);
    return (
        <Route
            {...rest}
            render = {() => users ? 
                <Component {...rest}/>
                :
                <Redirect to="/" />
            }
        />
    )
};
export default Routes;