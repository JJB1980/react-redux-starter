import styled from 'styled-components';

import { DarkBGColor } from 'styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 10em;
  color: white;
  background: ${DarkBGColor.lighten(0.2).toString()};
`;
