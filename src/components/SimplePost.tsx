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
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  width: 250px;
  display:inline-block;
  text-align: center;
  margin-top: 10px;
  text-decoration: none;
  color: inherit;
  background: #fff;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  p {
    font-size: 1rem;
    font-weight: bold;
    font-style:italic;
  
  }

  &:hover {
    cursor: pointer;
    background-color: #fafafa;
    transition: background-color 0.3s;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;
