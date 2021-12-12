import { Link } from 'react-router-dom';
import Color from 'color';
import styled from 'styled-components';

export const LinkButtonS = styled.button<any>`
  padding: 1em 0;
  border: none;
  font-size: 0.9em;
  color: ${({ disabled, alty, theme }: any) => {
    return disabled ? 'grey' : Color(alty === 'y' ? theme.AltLink : theme.Link).toString();
  }};
  background: transparent;
  cursor: pointer;
  :hover {
    color: ${({ theme, alty }: any) => Color(alty === 'y' ? theme.AltLink : theme.Link).darken(0.3).string()};
  }
`;

export const StyledLink = styled<any>(Link)`
  font-size: 0.9em;
  color: ${({ disabled, alty, theme }: any) => {
    return disabled ? 'grey' : Color(alty === 'y' ? theme.AltLink : theme.Link).toString();
  }};
  text-decoration: none;
  :hover {
    color: ${({ theme, alty }: any) => Color(alty === 'y' ? theme.AltLink : theme.Link).darken(0.3).string()};
  }
`;
