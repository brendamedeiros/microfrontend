import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    /**  Whenever we start to build the app to production, rather generate different class names with jss it will generate with prefix 'ma' */
    productionPrefix: 'ma',
})

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}