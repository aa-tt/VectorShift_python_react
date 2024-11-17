import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { InputNode } from './nodes/inputNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { LLMNode } from './nodes/llmNode';
import { ReactFlowProvider } from 'reactflow';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactFlowProvider>
        <div>
          <PipelineToolbar />
          <PipelineUI />
          <SubmitButton />
          <div style={{ padding: '20px' }}>
            {/* Example usage of nodes */}
            <div style={{ display: 'flex', gap: '20px' }}>
              <InputNode id="input-1" data={{ inputName: 'Input 1' }} />
              <OutputNode id="output-1" data={{ outputName: 'Output 1' }} />
              <TextNode id="text-1" data={{ text: 'Sample Text' }} />
              <LLMNode id="llm-1" data={{}} />
            </div>
          </div>
        </div>
      </ReactFlowProvider>
    </ThemeProvider>
  );
}

export default App;
