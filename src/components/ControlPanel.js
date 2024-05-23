// src/components/ControlPanel.js
import React, { useContext } from 'react';
import { TextContext } from '../context/TextContext';

const ControlPanel = () => {
  const { texMode, setTexMode } = useContext(TextContext);

  const handleToggleView = () => {
    setTexMode((prevMode) => !prevMode);
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#222', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        onClick={handleToggleView}
        style={{ padding: '10px', backgroundColor: '#666', color: '#fff', borderRadius: '50px', marginBottom: '10px', border: 'none', cursor: 'pointer' }}
      >
        {texMode ? 'Show Formatted' : 'Show TeX'}
      </button>
      {/* Placeholder for additional buttons */}
    </div>
  );
};

export default ControlPanel;
