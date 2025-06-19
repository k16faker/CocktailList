import styled from "styled-components";
import { Link, LinkProps, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";

import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Header:React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const { user, logOut } = UserAuth();


  const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?name=${search}`);
  };

  const logoutHandler = () => {
    window.confirm("Are you sure you want to logout?");
    logOut();
  }

  useEffect(() => {
    if(user?.email) {
      const getUser = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNickname(docSnap.data().nickname);
        }
      };
      try {
        getUser();
      } catch(error) {
        console.error(error);
      }
    }
  }, [user]);



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
  margin: 0 auto;
  padding: 15px 20px;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  background: #fff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const PartDiv = styled.div`
  width: 300px;
  input {
    width: 100%;
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  button {
    height: 40px;
    padding: 0 12px;
    margin: 5px 0;
    margin-left: 8px;
    border-radius: 4px;
    border: none;
    background-color: #ff7f50;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #ff5722;
    transition: background-color 0.3s;
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
    li:hover {
      cursor: pointer;
      background-color: #fafafa;
      transition: background-color 0.3s;
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