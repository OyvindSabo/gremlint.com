import styled from 'styled-components';
import { inputTextColor } from '../styleVariables';

const QueryInputWrapper = styled.div`
  padding: 10px;
`;

const QueryInputTextArea = styled.textarea`
  height: calc(100vh / 4);
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(0, 0, 0, 0.05);
  outline: none;
  font-size: 16px;
  padding: 10px;
  border: none;
  resize: none;
  width: 100%;
  box-shadow: inset rgba(0, 0, 0, 0.5) 0 0 10px -5px;
  color: ${inputTextColor};
  box-sizing: border-box;
`;

const QueryInput = ({ onChange, value }) => (
  <QueryInputWrapper>
    <QueryInputTextArea onChange={onChange} value={value} rows={25} />
  </QueryInputWrapper>
);

export default QueryInput;
