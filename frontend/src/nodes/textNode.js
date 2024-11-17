import React, { useState, useEffect } from 'react';
import { BaseNode } from './baseNode';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
`;

const TextNodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 8px;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const TextNode = (props) => {
  const [text, setText] = useState(props.data.text || '');
  const [handles, setHandles] = useState([{ type: 'source', position: Position.Right, id: 'output' }]);
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });

  useEffect(() => {
    const newHandles = [{ type: 'source', position: Position.Right, id: 'output' }];
    const variableMatches = text.match(/{{\s*[\w]+\s*}}/g);
    if (variableMatches) {
      variableMatches.forEach((variable, index) => {
        const variableName = variable.replace(/[{}]/g, '').trim();
        newHandles.push({ type: 'target', position: Position.Left, id: variableName, style: { top: `${(index + 1) * 20}px` } });
      });
    }
    setHandles(newHandles);

    const newWidth = Math.max(200, text.length * 8);
    const newHeight = Math.max(80, text.split('\n').length * 20);
    setDimensions({ width: newWidth, height: newHeight });
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode {...props} type="Text" handles={handles}>
      <TextNodeContainer width={dimensions.width} height={dimensions.height}>
        <TextArea value={text} onChange={handleTextChange} />
      </TextNodeContainer>
    </BaseNode>
  );
};


// import { BaseNode } from './baseNode';
// import { Position } from 'reactflow';

// export const TextNode = (props) => {
//   const handles = [
//     { type: 'source', position: Position.Right, id: 'output' }
//   ];

//   return <BaseNode {...props} type="Text" handles={handles} />;
// };