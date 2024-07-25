import { doc, setDoc, getDoc } from "@firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import React from "react";

const EvaluationForm = () => {
  const { user } = UserAuth();
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");

  return (
    <Container>
      {user ? (
        <CustomForm>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Evaluation" />
          <button type="submit">Submit</button>
        </CustomForm>
      ) : (
        <p>Please Login to write evaluation</p>
      )}
    </Container>
  );
};

export default EvaluationForm;

const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const CustomForm = styled.form`
    display: flex;
    width: 80%;
    padding: 10px 20px 10px 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;

    input {
        width: 10%;
        height: 30px;
        margin-right: 10px;
    }

    textarea {
        width: 50%;
        height: 30px;
        margin-right: 10px;
    }

    button {
        width: 100px;
        height: 30px;
        border-radius: 5px;
        background-color: #f1f1f1;
        font-size: 1rem;

    }
    
    button:hover {
        background-color: #45a049;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }
`;
