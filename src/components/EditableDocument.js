// src/components/EditableDocument.js
import React, { useContext, useEffect, useState } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { TextContext } from '../context/TextContext';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const EditableDocument = () => {
  const { documentText, setDocumentText, texMode, fetchDocumentText, saveDocumentText } = useContext(TextContext);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    fetchDocumentText();
  }, []);

  useEffect(() => {
    setEditorState(EditorState.createWithContent(ContentState.createFromText(documentText)));
  }, [documentText]);

  const handleEditorChange = (state) => {
    setEditorState(state);
    const contentState = state.getCurrentContent();
    setDocumentText(contentState.getPlainText());
    saveDocumentText(contentState.getPlainText());
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#444', color: '#eee', height: '100vh', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
      {texMode ? (
        <BlockMath math={documentText} />
      ) : (
        <Editor editorState={editorState} onChange={handleEditorChange} />
      )}
    </div>
  );
};

export default EditableDocument;
