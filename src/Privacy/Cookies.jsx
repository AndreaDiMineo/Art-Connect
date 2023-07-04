import React, { useState } from 'react';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDecline = () => {
    setShowPopup(false);
  };

  return (
    <div className={`cookie-popup ${showPopup ? 'show' : ''}`}>
      <div className="cookie-popup-content">
        <p>Questo sito utilizza i cookie per garantirti la migliore esperienza possibile.</p>
        <div>
          <button onClick={handleClosePopup}>Accetta</button>
          <button onClick={handleDecline}>Rifiuta</button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
