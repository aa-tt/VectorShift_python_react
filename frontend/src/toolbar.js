// toolbar.js

import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { DraggableNode } from './draggableNode';

const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const PipelineToolbar = () => {

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <div style={{ padding: '10px' }}>
                    <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <DraggableNode type='customInput' label='Input' />
                        <DraggableNode type='llm' label='LLM' />
                        <DraggableNode type='customOutput' label='Output' />
                        <DraggableNode type='text' label='Text' />
                    </div>
                </div>
            </Toolbar>
        </StyledAppBar>
    );
};
