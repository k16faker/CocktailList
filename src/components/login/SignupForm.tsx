import React, {useState} from 'react'

import styled from 'styled-components'

import { Link, LinkProps, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignupForm:React.FC = () => {

  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const SignupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(email, password, nickname);
      if(email === "" || password === "" || nickname === ""){
        alert("모든 항목을 입력해주세요.");
        return;
      };
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
        <h1>SignUp</h1>
        <CustomForm onSubmit={SignupHandler}>
            <CustomInput type="email" placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
            <CustomInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <CustomInput type="text" placeholder="Nickname" onChange={(e) => setNickname(e.target.value)} />
            <CustomLoginBtn type="submit" >SignUp</CustomLoginBtn>
        </CustomForm>

        <CustomLink to="/login">
            <p>or Login</p>
        </CustomLink>
    </Container>
  )
}

export default SignupForm


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