import styled from 'styled-components';
import Color from 'color';

export const LinkColor = Color('blue');

export const LinkButtonS = styled.button`
  padding: 1em 0;
  border: none;
  font-size: 0.9em;
  color: ${(props) => props.disabled ? 'grey' : Color(props.color).toString()};
  background: transparent;
  cursor: pointer;
  :hover {
    color: ${props => Color(props.color).darken(0.3).string()};
  }
`;
