// BaseNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import styled from 'styled-components';

const NodeContainer = styled.div`
  width: 200px;
  height: 80px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const NodeLabel = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary.main};
`;

const NodeInput = styled.input`
  margin: 5px 0;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 4px;
`;

const NodeSelect = styled.select`
  margin: 5px 0;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 4px;
`;

export const BaseNode = ({ id, data, type, handles }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace(`custom${type}-`, `${type.toLowerCase()}_`));
  const [nodeType, setNodeType] = useState(data.type || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setNodeType(e.target.value);
  };

  return (
    <NodeContainer>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <NodeLabel>{type}</NodeLabel>
      <NodeInput type="text" value={currName} onChange={handleNameChange} />
      <NodeSelect value={nodeType} onChange={handleTypeChange}>
        <option value="Text">Text</option>
        <option value="File">File</option>
      </NodeSelect>
    </NodeContainer>
  );
};
// import { useState } from 'react';
// import { Handle } from 'reactflow';

// export const BaseNode = ({ id, data, type, handles }) => {
//   const [currName, setCurrName] = useState(data?.name || id.replace(`custom${type}-`, `${type.toLowerCase()}_`));
//   const [nodeType, setNodeType] = useState(data.type || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setNodeType(e.target.value);
//   };

//   return (
//     <div style={{ width: 200, height: 80, border: '1px solid black' }}>
//       {handles.map((handle, index) => (
//         <Handle
//           key={index}
//           type={handle.type}
//           position={handle.position}
//           id={`${id}-${handle.id}`}
//           style={handle.style}
//         />
//       ))}
//       <div>
//         <span>{type}</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={currName}
//             onChange={handleNameChange}
//           />
//         </label>
//         <label>
//           Type:
//           <select value={nodeType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// };