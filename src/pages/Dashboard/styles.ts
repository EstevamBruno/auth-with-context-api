import styled from "styled-components";

export const Header = styled.header`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.90);
  color: #fff;
`;

export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.90);
  color: #fff;

  div {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      padding: 15px;
      border-radius: 5px;
      border: none;
      background-color: rgba(0, 0, 0, 0.30);
      margin-bottom: 15px;
      transition: background-color 0.2s;

      :hover {
        background-color: rgba(0, 0, 0, 0.12);
      }
    }
  }
`;
