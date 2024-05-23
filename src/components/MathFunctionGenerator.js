// src/components/MathFunctionGenerator.js
import React, { useContext, useState } from 'react';
import { TextContext } from '../context/TextContext';

const MathFunctionGenerator = () => {
  const { mathFormula, setMathFormula, generateMathFunction, graphData } = useContext(TextContext);
  const [numLines, setNumLines] = useState('');

  const handleGenerateFunction = () => {
    generateMathFunction(numLines);
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#333', color: '#eee' }}>
      <input
        type="text"
        value={numLines}
        onChange={(e) => setNumLines(e.target.value)}
        placeholder="Number of lines"
        style={{ width: '100%', padding: '10px', backgroundColor: '#444', color: '#eee', marginBottom: '10px', border: '1px solid #555', borderRadius: '4px' }}
      />
      <button
        onClick={handleGenerateFunction}
        style={{ width: '100%', padding: '10px', backgroundColor: '#666', color: '#fff', borderRadius: '50px', marginBottom: '10px', border: 'none', cursor: 'pointer' }}
      >
        Generate Function
      </button>
      <textarea
        value={mathFormula}
        onChange={(e) => setMathFormula(e.target.value)}
        style={{ width: '100%', padding: '10px', backgroundColor: '#444', color: '#eee', marginBottom: '10px', border: '1px solid #555', borderRadius: '4px' }}
        rows={2}
      />
      <div>
        <h4>Graph</h4>
        {/* Placeholder for rendering graph */}
        {graphData && <img src={`data:image/png;base64,${graphData}`} alt="Graph" />}
      </div>
    </div>
  );
};

export default MathFunctionGenerator;
