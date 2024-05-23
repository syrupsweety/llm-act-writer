// src/App.js
import React from 'react';
import { TextProvider } from './context/TextContext';
import TreeView from './components/TreeView';
import EditableDocument from './components/EditableDocument';
import MathFunctionGenerator from './components/MathFunctionGenerator';
import ControlPanel from './components/ControlPanel';
import './styles.css';

const App = () => {
  return (
    <TextProvider>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#333' }}>
        <div style={{ backgroundColor: '#222', color: '#fff', padding: '10px', textAlign: 'center' }}>
          <h1>Editable Scrollable Pages</h1>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{ width: '20%', borderRight: '1px solid #555', overflowY: 'auto' }}>
            <TreeView />
          </div>
          <div style={{ width: '60%', padding: '20px', overflowY: 'scroll' }}>
            <EditableDocument />
          </div>
          <div style={{ width: '20%', padding: '20px', borderLeft: '1px solid #555', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <ControlPanel />
            <MathFunctionGenerator />
          </div>
        </div>
      </div>
    </TextProvider>
  );
};

export default App;
