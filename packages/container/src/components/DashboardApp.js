import { mountDashboardEl } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboardEl(ref.current);
  }, []);

  return <div ref={ref} />;
};
