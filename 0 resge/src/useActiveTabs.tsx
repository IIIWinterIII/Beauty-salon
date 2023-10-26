import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ActiveTabs {
  [key: string]: boolean;
}

const useActiveTabs = (): ActiveTabs => {
  const [activeTabs, setActiveTabs] = useState<ActiveTabs>({
    '/': false,
    '/cart': false,
    '/price': false,
    '/kontakt': false,
  });

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Reset all active tabs to false
    const updatedTabs: ActiveTabs = {};
    for (const key in activeTabs) {
      if (Object.prototype.hasOwnProperty.call(activeTabs, key)) {
        updatedTabs[key] = false;
      }
    }

    // Set the current tab to true
    updatedTabs[pathname] = true;
    setActiveTabs(updatedTabs);
  }, [activeTabs, pathname]); // Re-run the effect whenever the pathname changes

  return activeTabs;
};

export default useActiveTabs;
