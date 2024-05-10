import { Node, Edge } from 'reactflow';

export const nodes: Node[] = [
  {
    type: 'custom',
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 0, y: 0 },
  },
  
];

export const edges: Edge[] = [
  {
    id: '1->2',
    source: '1',
    target: '2',
  },
  
];
