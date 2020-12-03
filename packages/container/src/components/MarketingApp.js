import { mountMarketingEl } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

// Upside of this approach: it's reusable
export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountMarketingEl(ref.current);
    })

    return <div ref={ref} />;
}