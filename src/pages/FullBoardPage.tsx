//메인화면 - 칵테일 기본 추천 5개


import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import axios from 'axios'



import SimplePost from '../components/SimplePost'


interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

const FullBoardPage = () => {
    const [cocktail1, setCocktail1] = useState<Cocktail | undefined>();
    const [cocktail2, setCocktail2] = useState<Cocktail | undefined>();
    const [cocktail3, setCocktail3] = useState<Cocktail | undefined>();
    const [cocktail4, setCocktail4] = useState<Cocktail | undefined>();
    const [cocktail5, setCocktail5] = useState<Cocktail | undefined>();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const loadingMessage = "Loading...";


    useEffect(() => {
        axios.all([
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          ])
          .then(axios.spread((response1, response2, response3, response4, response5) => {
            setCocktail1(response1.data.drinks[0]);
            setCocktail2(response2.data.drinks[0]);
            setCocktail3(response3.data.drinks[0]);
            setCocktail4(response4.data.drinks[0]);
            setCocktail5(response5.data.drinks[0]);
            setIsLoading(false);
          }))
          .catch(error => {
            console.log(error);
          });
    }, []);



  return (
    <FullBoarddiv>
        {isLoading && <p>{loadingMessage}</p>}
        {!isLoading && <h2>Today's recommanded cocktail!</h2>}
        <ul>
            {/* {List.map((item, index) => {
                return (
                    <SimplePost key={index} name={item.name} imgUrl={item.imgUrl} no={item.no} />
                );
            })} */}
            {cocktail1 && <SimplePost key={cocktail1.idDrink} name={cocktail1.strDrink} imgUrl={cocktail1.strDrinkThumb} no={Number(cocktail1.idDrink)}/>}
            {cocktail2 && <SimplePost key={cocktail2.idDrink} name={cocktail2.strDrink} imgUrl={cocktail2.strDrinkThumb} no={Number(cocktail2.idDrink)}/>}
            {cocktail3 && <SimplePost key={cocktail3.idDrink} name={cocktail3.strDrink} imgUrl={cocktail3.strDrinkThumb} no={Number(cocktail3.idDrink)}/>}
            {cocktail4 && <SimplePost key={cocktail4.idDrink} name={cocktail4.strDrink} imgUrl={cocktail4.strDrinkThumb} no={Number(cocktail4.idDrink)}/>}
            {cocktail5 && <SimplePost key={cocktail5.idDrink} name={cocktail5.strDrink} imgUrl={cocktail5.strDrinkThumb} no={Number(cocktail5.idDrink)}/>}
        </ul>
    </FullBoarddiv>
  )
}

export default FullBoardPage



const FullBoarddiv = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    font-family: Witgenstein;
    ul {
        text-align: center;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        list-style-type: none;
    }
`;