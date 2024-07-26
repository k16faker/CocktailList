
import styled from 'styled-components'
import React from 'react'

interface EvaluationTempProps {
    nickname:string;
    evaluation:string;
}

const EvaluationTemp: React.FC<EvaluationTempProps> = ({nickname, evaluation}) => {

  return (
    <Container>
        <h1>{nickname}</h1>
        <p>{evaluation}</p>
    </Container>
  )
}

export default EvaluationTemp


const Container = styled.li`
    display: flex;
    align-items: center;
    padding: 0px 15px 0px 15px;
    border: 1px solid #ccc;
    border-radius: 15px;
    margin: 5px auto;
    width: 80%;
    h1 {
        margin-right: 10px;
        font-size: 1.5rem;
    }
    p {
        margin: 5px;
    }
`;