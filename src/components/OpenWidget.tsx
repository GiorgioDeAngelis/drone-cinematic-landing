
import { useEffect } from 'react';

declare global {
  interface Window {
    openwidget: {
      api_key: string;
      colour: string;
      display: {
        position: string;
        offset_x: string;
        offset_y: string;
      };
    };
  }
}

const OpenWidget = () => {
  useEffect(() => {
    // Configuration is handled in index.html
    // This component is a placeholder for any future widget customization
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default OpenWidget;
