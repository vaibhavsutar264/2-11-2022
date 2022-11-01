import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
  }

  p {
    line-height: 1.4rem;
  }

  .btn-primary {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
  .h1-padding{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }

  .login-form{
    background: ${({ theme }) => theme.background};
    transition: all .5s linear;
  }
  .homescreen-text{
    color: ${({ theme }) => theme.text};
  }
  .login-area .forgot-password {
    color: ${({ theme }) => theme.textForLogin};
  }
  .login-area .form-title p.sub-title {
    color: ${({ theme }) => theme.textForLogin};
  }

`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  textForLogin:"#858585",
  primary: '#6200ee',
  background: "white"
};

export const darkTheme = {
  body: '#121212',
  text: '#fff',
  textForLogin:"white",
  primary: '#bb86fc',
  background: "black"
};