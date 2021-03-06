import styled from 'styled-components';

import { ButtonColor } from 'styled';

export const LoginButton = styled.button`
  padding: 1em;
  border: none;
  background: ${(props) => props.disabled ? 'grey' : ButtonColor.toString()};
  color: white;
  width: 100%;
  margin-top: 2em;
  border-radius: 0.5em;
  :active {
    background: ${ButtonColor.darken(0.3).string()};
  }
`;
