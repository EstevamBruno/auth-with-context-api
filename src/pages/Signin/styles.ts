import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.90);
  color: #fff;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;;
    margin-bottom: 20px;
  }

  form {
    width: 250px;
    display: flex;
    flex-direction: column;

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      label {
        margin-bottom: 5px;
      }

      input {
        border: 1px solid rgba(0, 0, 0, 0.30);
        background-color: rgba(0, 0, 0, 0.30);
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        transition: border 0.8s;

        :focus {
          border: 1px solid #fff;
        }
      }
    }

    button {
      cursor: pointer;
      padding: 10px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.30);
      color: #fff;
      transition: background-color 0.2s;
      margin-bottom: 20px;

      :hover {
        background-color: rgba(0, 0, 0, 0.12);
      }
    }

    small {
      color: #F71735;
    }
  }
`;
