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
    padding: 10px 20px 10px 20px;
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