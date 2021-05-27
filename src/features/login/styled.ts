import styled from 'styled-components';
import Color from 'color';

export const ButtonColor = Color('#2323ca');
export const LinkColor = Color('blue');

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const Form = styled.div`
  position: absolute;
  width: 22em;
  left: 50%;
  margin-left: -11em;
  padding: 2em;
  border: 1px solid #d8d1d1;
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

export const Link = styled.a`
  display: block;
  padding-top: 1.5em;
  text-decoration: none;
  color: ${LinkColor.toString()};
  font-size: 0.9em;
  :hover {
    color: ${LinkColor.lighten(0.4).toString()};
  }
`;
