import styled from 'styled-components';

export const Container = styled.div<any>`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.BG};
`;

export const Form = styled.div<any>`
  position: absolute;
  width: 22em;
  left: 50%;
  margin-left: -11em;
  padding: 2em;
  border: 1px solid ${props => props.theme.name === 'light' ? '#d8d1d1' : 'grey'};
  border-radius: 1em;
  top: 50%;
  height: 30em;
  margin-top: -15em;
`;

export const Logo = styled.img`
  width: 5em;
  display: block;
  margin: auto;
`;
