import styled from 'styled-components';
import Color from 'color'

const ButtonColour = Color('red')

export const LocalesContainer = styled.div`
  padding: 1em 0 0 0;
  float: right;
`;

export const LocaleOption = styled.button`
  display: inline-block;
  padding: 0.5em;
  color: ${ButtonColour.toString()};
  border: none;
  background: transparent;
  :hover {
    color: ${ButtonColour.darken(0.25).toString()};
    cursor: pointer;
  }
`;
