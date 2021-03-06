import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    /**  Whenever we start to build the app to production, rather generate different class names with jss it will generate with prefix 'ma' */
    productionPrefix: 'ma',
})

/** Router doesn't make its own history */

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}