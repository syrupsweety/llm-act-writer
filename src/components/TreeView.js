// src/components/TreeView.js
import React, { useContext } from 'react';
import { Treebeard } from 'react-treebeard';
import { TextContext } from '../context/TextContext';
import '../styles.css';

const TreeView = () => {
  const { treeData, setTreeData } = useContext(TextContext);

  const onToggle = (node, toggled) => {
    if (node.children) {
      node.toggled = toggled;
    }
    setTreeData(Object.assign({}, treeData));
  };

  return (
    <div className="tree-view">
      <Treebeard
        data={treeData}
        onToggle={onToggle}
      />
    </div>
  );
};

export default TreeView;
