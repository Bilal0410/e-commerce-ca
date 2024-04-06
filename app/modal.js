import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal() {
  useEffect(() => {
    const portalElement = document.getElementById('portal');
    if (!portalElement) {
      console.error("Target container 'portal' not found in DOM");
      return;
    }

    ReactDOM.createPortal(
      <div>Modal</div>,
      portalElement
    );
  }, []); // Empty dependency array to run only once after component mount

  return null; // Return null or an empty component, as createPortal is used in useEffect
}
