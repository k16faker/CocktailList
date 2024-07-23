import React from 'react'

import styled from 'styled-components'

import { Link, LinkProps } from 'react-router-dom'

const LoginForm = () => {
  return (
    <Container>
        <h1>Login</h1>
        <CustomForm>
            <CustomInput type="text" placeholder="Username" />
            <CustomInput type="password" placeholder="Password" />
            <CustomLoginBtn type="submit">Login</CustomLoginBtn>
        </CustomForm>

        <CustomLink to="/signup">
            <p>or Signup</p>
        </CustomLink>
    </Container>
  )
}

export default LoginForm


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;
const CustomInput = styled.input`
    padding: 5px 10px 5px 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 15px;
    width: 200px;
    border: 1px solid #ccc;
    &:focus {
        border: 1px solid #4caf50;
    }
`;

const CustomLoginBtn = styled.button`
    padding: 5px 10px 5px 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    background-color: #f1f1f1;
    border:none;
    transition: 0.3s;
    &:hover {
        background-color: #4caf50;
        color: white;
    }
`;

const CustomLink = styled(Link)<LinkProps>`
  text-decoration: none;
  color: inherit;
  font-weight: bold;

  &:hover {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;