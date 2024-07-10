import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <FullHeaderdiv>
      <PartDiv>
        <h1>Whiskeys</h1>
      </PartDiv>
      <PartDiv>
        <div>
          <input type="text" placeholder="Search.." />
          <button>Search</button>
        </div>
      </PartDiv>
      <RightDiv>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
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

  div {
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
