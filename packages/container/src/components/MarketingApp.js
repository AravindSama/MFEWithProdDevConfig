import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;

        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });

    return onParentNavigate ? onParentNavigate : undefined;
  }, [location, navigate]);

  return <div ref={ref} />;
};
