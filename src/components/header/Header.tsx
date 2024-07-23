import styled from "styled-components";
import { Link, LinkProps, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

const Header:React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const {user, logOut} = UserAuth();


  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?name=${search}`);
  };

  const logoutHandler = () => {
    logOut();
  }



  return (
    <FullHeaderdiv>
      <PartDiv>
        <CustomLink to="/">
          <h1>Cocktails</h1>
        </CustomLink>
      </PartDiv>
      <PartDiv>
        <form onSubmit={searchHandler}>
          <input type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </PartDiv>
      <RightDiv>
        <ul>
          <CustomLink to="/">
            <li>Home</li>
          </CustomLink>
          <CustomLink to="/category">
            <li>Category</li>
          </CustomLink>
          <CustomLink to="/glass">
            <li>Glass</li>
          </CustomLink>
          {user?.email ? (
            <li onClick={logoutHandler}>Logout</li>
          ) : (
            <CustomLink to="/login">
              <li>Login</li>
            </CustomLink>
          )}
        </ul>
      </RightDiv>
    </FullHeaderdiv>
  );
};

export default Header;

const FullHeaderdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  border-bottom: 1px solid black;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  font-family: Wittgenstein;
`;

const PartDiv = styled.div`
  width: 300px;
  input {
    width: 100%;
    padding: 5px 10px 5px 10px;
    margin: 5px 0;
    border-radius: 5px;
    text-align: center;
    font-size: 20px;
  }

  button {
    width: 65px;
    height: 50px;
    padding: 10px;
    margin: 5px 0;
    margin-left: 5px;
    border-radius: 5px;
    text-align: center;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
    transition: 0.3s;
  }

  form {
    display: flex;
  }
`;
const RightDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 900px;
  height: 100%;
  ul {
    display: flex;
    list-style-type: none;
    width: 70%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    justify-content: space-between;
    li {
      padding: 14px 16px;
      text-decoration: none;
    }
    li:visited {
      color: black;
    }
    li:hover {
      cursor: pointer;
      
      background-color: #f1f1f1;
      transition: 0.3s;
    }
  }
`;

const CustomLink = styled(Link)<LinkProps>`
  text-decoration: none;
  color: inherit;
  font-weight: bold;

  &:hover {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;
