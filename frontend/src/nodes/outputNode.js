import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const OutputNode = (props) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'value' }
  ];

  return <BaseNode {...props} type="Output" handles={handles} />;
};