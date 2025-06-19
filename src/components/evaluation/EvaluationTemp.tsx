
import styled from 'styled-components'
import React, {useEffect} from 'react'

import { UserAuth } from '../../context/AuthContext';

interface EvaluationTempProps {
    nickname:string;
    evaluation:string;
    email:string;
}

const EvaluationTemp: React.FC<EvaluationTempProps> = ({nickname, evaluation, email}) => { // 각 댓글별 포맷입니다.

    const { user } = UserAuth();


    const changeEvaluation = () => {
        if(user.email !== email){
            alert("타인의 평가는 변경할 수 없습니다.");
        } else {
            alert("평가를 변경합니다.");
        }
    }

    useEffect(() => {
        console.log(user.email);
    }, [user.email]);

  return (
    <Container>
        <h1>{nickname}</h1>
        <p>{evaluation}</p>
        <CustomBtn onClick={changeEvaluation}>Change</CustomBtn>
    </Container>
  )
}

export default EvaluationTemp


const Container = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    margin: 5px auto;
    width: 80%;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    h1 {
        margin-right: 10px;
        font-size: 1.5rem;
    }
    p {
        margin: 5px;
    }
`;

const CustomBtn = styled.button`
    width: 100px;
    height: 36px;
    border-radius: 4px;
    background-color: #ff7f50;
    font-size: 1rem;
    margin-left: auto;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #ff5722;
    }
`;