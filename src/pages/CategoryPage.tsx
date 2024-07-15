

import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';

import SimplePost from '../components/SimplePost';

interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const CategoryPage = () => {
    const categorySelectRef = useRef<HTMLSelectElement>(null);
    const [category, setCategory] = useState<Cocktail[] | undefined>();

    const getCategories = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorySelectRef.current?.value}`);
        console.log(categorySelectRef.current?.value);
        console.log(response.data.drinks);
        setCategory(response.data.drinks);
    };


  return (
    <Container>
      <h1>Category Page</h1>
      <SmallHeader>
        <CustomSelect ref={categorySelectRef}>
            <option value="Ordinary_drink">Ordinary Drink</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Shake">Shake</option>
        </CustomSelect>
        <CustomBtn onClick={getCategories}>Search</CustomBtn>
      </SmallHeader>
      <CustomUl>
            {category && category.map((item, index) => {
                return (
                    <SimplePost key={index} name={item.strDrink} imgUrl={item.strDrinkThumb} no={Number(item.idDrink)} />
                );
            })}
      </CustomUl>
    </Container>
  )
}

export default CategoryPage


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
