import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.08);
  padding: 3px 3px;
  border-radius: 30px;
  width: 236px;   
  height: 48px; 
`;

export const MonthHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 14px;
  width: 100%;
  margin: 10px 10px 0 15px;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #3b46f1;
    }
  }

  div {
    margin: 0 1px 5px; 
    cursor: pointer;
    display: flex;  
    justify-content: center;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #616161;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #3b46f1;
  }
`;

export const CurrentMonth = styled.div`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
