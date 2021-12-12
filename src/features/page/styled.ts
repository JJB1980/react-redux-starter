import styled from 'styled-components';

export const Container = styled.div<any>`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.BG};
  color:  ${({ theme }) => theme.Text};
`;

export const Loader = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  height: 4em;
  margin-top: -2em;
`;
