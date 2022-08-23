import React from 'react';
import styled from 'styled-components';

function TextInput(props) {
  const { height, value, onChange } = props;
  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;

const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => { return props.height && `height: ${props.height}px;`; }}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;
