import React, { useState } from 'react';

const TermsOfUse = () => {
  const [optionalPermissions, setOptionalPermissions] = useState([]);
  const [requiredPermissions, setRequiredPermissions] = useState([]);

  const handleToggleOptionalPermission = (permission) => {
    if (optionalPermissions.includes(permission)) {
      setOptionalPermissions(optionalPermissions.filter((p) => p !== permission));
    } else {
      setOptionalPermissions([...optionalPermissions, permission]);
    }
  };

  const handleAcceptTerms = () => {
    console.log('Permessi opzionali accettati:', optionalPermissions);
    console.log('Permessi obbligatori accettati:', requiredPermissions);
  };

  return (
    <div>
      <h2>Termini d'uso</h2>
      <h3>Permessi opzionali</h3>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={optionalPermissions.includes('Fotocamera')}
              onChange={() => handleToggleOptionalPermission('Fotocamera')}
            />
            Fotocamera
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={optionalPermissions.includes('Posizione')}
              onChange={() => handleToggleOptionalPermission('Posizione')}
            />
            Posizione
          </label>
        </li>
      </ul>
      <h3>Permessi obbligatori</h3>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={requiredPermissions.includes('Email')}
              onChange={() => setRequiredPermissions(['Email'])}
            />
            Email
          </label>
        </li>
      </ul>
      <button onClick={handleAcceptTerms}>Accetta</button>
    </div>
  );
};

export default TermsOfUse;
