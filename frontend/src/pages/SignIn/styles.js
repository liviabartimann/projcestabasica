import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=K2D:800&display=swap");

  margin-top: 100px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #238e68;
  color: #fff;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    align-items: center;
    justify-content: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    font-size: 60px;
    font-family: Bauhaus 93;
  }
  * {
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    flex-direction: column;
  }

  button {
    border-radius: 8px;
    background-color: #dcdcdc;
    cursor: pointer;
    border: 1;
    width: 10;
  }

  input {
    border-radius: 8px;
  }
`;
