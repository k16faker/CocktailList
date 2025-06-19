import React, {useState} from 'react'

import styled from 'styled-components'

import { Link, LinkProps, useNavigate } from 'react-router-dom'

import { UserAuth } from '../../context/AuthContext'

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { logIn, googleSignIn } = UserAuth();

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      alert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const googleLoginHandler = async () => {
    try {
      await googleSignIn(navigate);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Container>
        <h1>Login</h1>
        <CustomForm onSubmit={loginHandler}>
            <CustomInput type="email" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
            <CustomInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <CustomLoginBtn type="submit">Login</CustomLoginBtn>
        </CustomForm>
        <CustomLoginBtn onClick={googleLoginHandler}>Google Login</CustomLoginBtn>

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
    padding: 40px 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: 40px auto;
`;

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const CustomInput = styled.input`
    padding: 10px 12px;
    margin: 10px 0;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    border: 1px solid #ccc;
    &:focus {
        border: 1px solid #ff7f50;
    }
`;

const CustomLoginBtn = styled.button`
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
    background-color: #ff7f50;
    border:none;
    color: #fff;
    transition: background-color 0.3s;
    &:hover {
        background-color: #ff5722;
        color: #fff;
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