// 칵테일의 상세 정보를 보여주는 페이지


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import EvaluationForm from "../components/evaluation/EvaluationForm";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strGlass: string;
  strAlcoholic: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

const DetailPostPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const no = searchParams.get("no");

  const [cocktail, setCocktail] = useState<Cocktail | undefined>();

  const getDetail = async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${no}`
    );
    console.log(response.data.drinks[0]);
    setCocktail(response.data.drinks[0]);
  };

  useEffect(() => {
    getDetail();
  }, [no]);

  const {
    strDrink,
    strDrinkThumb,
    strGlass,
    strAlcoholic,
    strInstructions,
    ...rest
  } = cocktail || {};

  const ingredientsWithMeasures = Object.entries(rest)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([key, value], index) => {
      const measureKey = `strMeasure${index + 1}` as keyof typeof rest;
      const measure = rest[measureKey];
      return `${value} : ${measure || ""}`.trim();
    });

  return (
    <div>
      <Container>
        <img src={strDrinkThumb} alt={strDrink} />
        <h1>{strDrink}</h1>
        <p>Glass: {strGlass}</p>
        <p>Alcoholic: {strAlcoholic == "Alcoholic" ? "Yes" : "No"}</p>
        <p>Ingredients:</p>
        <CustomUl>
          {ingredientsWithMeasures.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </CustomUl>
        <p>How to make: {strInstructions}</p>
        <a href={`https://www.youtube.com/results?search_query=${strDrink}`} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
      </Container>
      <EvaluationForm />
    </div>
  );
};

export default DetailPostPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #888888;
  width: 90%;
  margin-top: 10px;
  text-decoration: none;
  color: black;
  font-family: Witgenstein;
  background-color: #f1f1f1;
  margin: 20px auto;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const CustomUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  justify-content: center;
  gap: 10px;
`;
