// submit.js


import React from 'react';
import { useReactFlow } from 'reactflow';
import styled from 'styled-components';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  margin: 20px;
`;

export const SubmitButton = () => {
    const { getNodes, getEdges } = useReactFlow();

    const handleSubmit = async () => {
        const nodes = getNodes();
        const edges = getEdges();

        // with uvicorn running FastAPI
        // const response = await fetch('/pipelines/parse', {
        const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nodes, edges }),
        });

        const result = await response.json();
        alert(`Number of Nodes: ${result.num_nodes}\nNumber of Edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`);
    };
    return (
        <StyledButton variant="contained" color="primary" onClick={handleSubmit}>
            Submit
        </StyledButton>
    );
};
