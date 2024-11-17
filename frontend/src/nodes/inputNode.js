import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const InputNode = (props) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return <BaseNode {...props} type="Input" handles={handles} />;
};