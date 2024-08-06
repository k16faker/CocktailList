//글라스 기준으로 분류하는 페이지

import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import SimplePost from '../components/SimplePost';

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const GlassPage = () => {
    const glassSelectRef = useRef<HTMLSelectElement>(null);
    const [glass, setGlass] = useState<Cocktail[] | undefined>();

    const getCategories = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassSelectRef.current?.value}`);
        console.log(glassSelectRef.current?.value);
        console.log(response.data.drinks);
        setGlass(response.data.drinks);
    };


  return (
    <Container>
      <h1>Glass Page</h1>
      <SmallHeader>
        <CustomSelect ref={glassSelectRef}>
            <option value="cocktail_glass">Cocktail Glass</option>
            <option value="highball_glass">Highball Glass</option>
            <option value="collins_glass">Collins Glass</option>
            <option value="old-fashioned_glass">Old-Fashioned Glass</option>
        </CustomSelect>
        <CustomBtn onClick={getCategories}>Search</CustomBtn>
      </SmallHeader>
      <CustomUl>
            {glass && glass.map((item, index) => {
                return (
                    <SimplePost key={index} name={item.strDrink} imgUrl={item.strDrinkThumb} no={Number(item.idDrink)} />
                );
            })}
      </CustomUl>
    </Container>
  )
}

export default GlassPage


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const SmallHeader = styled.div`
    display: flex;
`;

const CustomBtn = styled.button`
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

const CustomUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display:grid;
    grid-template-columns: repeat(5, 1fr);

`;

const CustomSelect = styled.select`
    padding: 5px 10px 5px 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 15px;
    width: 200px;
`;
