import styled from "styled-components";

export const AlterationsContainer = styled.aside`
  height: 80vh;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const BoxAlterations = styled.button`
  width: 300px;
  height: auto;
  font-size: 2em;
  min-width: 200px;
  background-color: transparent;
  background-color: rgb(203 235 241 / 80%);
  border: solid 1px #e8d8d8;
  border-radius: 50px;
  font-family: "Acme", sans-serif;
  text-transform: uppercase;
  color: #62647a;
  color: black;
  backdrop-filter: blur(1px);
  cursor: pointer;

  font-family: "FuturaStd", sans-serif;
  border-radius: 3px;
  background-color:rgba(255,255,255,.9);
  //font-weight: 300;
  //letter-spacing: 5px;
  //color: #a59797;
  color:#494261b5;
  //font-size: 100%;
  &:hover {
    box-shadow: 2px 6px 13px -4px rgba(0, 0, 0, 0.54);
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
   font-size: 22px;
   
  }
`;
