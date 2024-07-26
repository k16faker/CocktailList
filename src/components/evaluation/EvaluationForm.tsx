import { doc, setDoc, getDoc, getDocs, collection } from "@firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";
import React, { useState, useEffect } from "react";
import EvaluationTemp from "./EvaluationTemp";

interface Evaluation {
  nickname: string;
  evaluation: string;
}

const EvaluationForm:React.FC = () => {
  const { user } = UserAuth();
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");
  const [nickname, setNickname] = useState<string>("");
  const [evaluation, setEvaluation] = useState<string>("");
  const [evaluationList, setEvaluationList] = useState<Evaluation[]>([]);

  const getNickname = async () => {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setNickname(docSnap.data()?.nickname);
    }
  };

  const fetchEvaluations = async () => {
    try {
      const evaluationsCollection = collection(db, no ?? "");
      const evaluationSnapshot = await getDocs(evaluationsCollection);
      const evaluationList = evaluationSnapshot.docs.map(doc => ({
        nickname: doc.data().nickname,
        evaluation: doc.data().evaluation,
      }));
      setEvaluationList(evaluationList);
    } catch (error) {
      console.error('Error fetching evaluations:', error);
    }
  };



  useEffect(() => {
    fetchEvaluations();
    if(user?.email) {
      getNickname();
    }
  }, []);


  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const docRef = doc(db, "evaluations", no ?? "");
  //   await setDoc(docRef, {
  //     nickname: nickname,
  //     evaluation: evaluation,
  //   });
  //   alert("Evaluation Submitted");
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const docRef = doc(db, no ?? "", nickname);
    await setDoc(docRef, {
      nickname: nickname,
      evaluation: evaluation,
    });
    alert("Evaluation Submitted");
    window.location.reload();
  };
  

  return (
    <Container>
      {user ? (
        <CustomForm onSubmit={handleSubmit} >
          <p>{nickname}</p>
          <textarea placeholder="Evaluation" onChange={(e) => setEvaluation(e.target.value)}/>
          <button type="submit">Submit</button>
        </CustomForm>
      ) : (
        <p>Please Login to write evaluation</p>
      )}
      <CustomUl>
        {evaluationList.map((evaluation, index) => (
          <EvaluationTemp key={index} nickname={evaluation.nickname} evaluation={evaluation.evaluation} />
        ))}
      </CustomUl>
    </Container>
  );
};

export default EvaluationForm;

const CustomUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Container = styled.div`

  display: flex;
  flex-direction: column;
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

    p {
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
