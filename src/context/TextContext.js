// src/context/TextContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [treeData, setTreeData] = useState({ name: 'root', toggled: true, children: [] });
  const [documentText, setDocumentText] = useState('');
  const [texMode, setTexMode] = useState(true);
  const [mathFormula, setMathFormula] = useState('');
  const [graphData, setGraphData] = useState(null);

  const fetchDocumentText = async () => {
    try {
      const response = await axios.get('/api/document');
      setDocumentText(response.data.text);
    } catch (error) {
      console.error('Error fetching document text:', error);
    }
  };

  const saveDocumentText = async (text) => {
    try {
      await axios.post('/api/document', { text });
    } catch (error) {
      console.error('Error saving document text:', error);
    }
  };

  const generateMathFunction = async (numLines) => {
    try {
      const response = await axios.post('/api/generate-function', { numLines });
      setMathFormula(response.data.formula);
      setGraphData(response.data.graph);
    } catch (error) {
      console.error('Error generating math function:', error);
    }
  };

  return (
    <TextContext.Provider value={{
      treeData,
      setTreeData,
      documentText,
      setDocumentText,
      texMode,
      setTexMode,
      mathFormula,
      setMathFormula,
      graphData,
      setGraphData,
      fetchDocumentText,
      saveDocumentText,
      generateMathFunction
    }}>
      {children}
    </TextContext.Provider>
  );
};
