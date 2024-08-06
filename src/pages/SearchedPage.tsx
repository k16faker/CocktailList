
//검색결과를 나타내주는 페이지

import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';

import SimplePost from '../components/SimplePost';


interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const SearchedPage = () => {

    const [cocktail, setCocktail] = useState<Cocktail[] | undefined>();

    const [searchParams] = useSearchParams();

    const search = searchParams.get('name');

    const searchCocktail = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
        console.log(response.data.drinks);
        setCocktail(response.data.drinks);
        if(response.data.drinks === null) {
            setCocktail([]);
        }
    };

    const ifNothing = cocktail && cocktail.length === 0;

    const nothingMessage = ifNothing ? "No result found" : "";

    useEffect(() => {
        searchCocktail();
    }, [search]);


  return (
    <Container>
        <h2>Search about "{search}"</h2>

        <p>{nothingMessage}</p>
        <CustomUl>
            {cocktail && cocktail.map((item, index) => {
                return (
                    <SimplePost key={index} name={item.strDrink} imgUrl={item.strDrinkThumb} no={Number(item.idDrink)} />
                );
            })}
        </CustomUl>
    </Container>
  )
}

export default SearchedPage


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;


const CustomUl = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display:grid;
    grid-template-columns: repeat(5, 1fr);

`;
