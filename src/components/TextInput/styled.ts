import styled from 'styled-components';

export const TextContainer = styled.div<any>`
  width: 100%;
  padding-top: 1em;
`;

export const Input = styled.input<any>`
  width: 100%;
  display: block;
  margin: auto;
  padding: 1em;
  border: 1px solid ${props => props.theme.name === 'light' ? '#cac6c6' : 'grey'};
  margin-top: 1em;
  border-radius: 0.5em;
  background: ${props => props.theme.name === 'light' ? 'white' : '#2F2E2E'};
  color: ${props => props.theme.name === 'light' ? 'black' : 'white'};
`;

export const Label = styled.label<any>`
  width: 100%;
  font-size: 0.9em;
  color: ${props => props.theme.Text}
`;
