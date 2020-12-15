import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';
import SignIn from './components/Signin';


const generateClassName = createGenerateClassName({
    /**  Whenever we start to build the app to production, rather generate different class names with jss it will generate with prefix 'ma' */
    productionPrefix: 'au',
})

/** Router doesn't make its own history */

export default ({ history, onSignIn }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <Signup onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}