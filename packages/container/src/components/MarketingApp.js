import { mountMarketingEl } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Upside of this approach: it's reusable
export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mountMarketingEl(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathName }) => { // we are destructuring and renaming the variable
                const { pathname } = history.location;

                if (pathname !== nextPathName) {
                    history.push(nextPathName); // update the URL
                }
            }
        });

        history.listen(onParentNavigate);
    }, []); // the [] means that only try to run this function when our marketing app component is first rendered to screen

    return <div ref={ref} />;
}