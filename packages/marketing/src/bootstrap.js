import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    // history object that comes back from calling createMemoryHistory as an event listener tied to it called 'listen'
    // Whenever the URL changes/user clicks on link, this history object is going to call any function that we have provided to this 'listen'
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,
        el
    );

    return {
        // any time the container does some kind of navigation, we want the container onParentNavigate
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location;

            if (pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    }
}

// If we are in dev in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root');

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// We are running through container and we should export the mount function
export { mount as mountMarketingEl };