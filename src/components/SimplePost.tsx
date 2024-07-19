import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface SimplePostProps {
    imgUrl: string;
    name: string;
    no: number;
  }

const SimplePost: React.FC<SimplePostProps> = ({imgUrl, name, no}) => {
  const navigate = useNavigate();

  return (
      <Link to={`/detail?no=${no}`}>
        <SimplePostdli>
          <Image src={imgUrl} alt={name} />
          <p>{name}</p>
        </SimplePostdli>
      </Link>
  );
};

export default SimplePost;

const SimplePostdli = styled.li`
  padding-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #888888;
  width: 250px;
  padding:5px;
  display:inline-block;
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  color:black;
  font-family: Witgenstein;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    font-style:italic;
  
  }

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
    transition: 0.3s;
  }
    &:visited {
      color:black;
    }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;
