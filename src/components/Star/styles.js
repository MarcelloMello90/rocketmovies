import styled from "styled-components";

export const BtnStar = styled.button` 
  
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  
  &.on {
  color: red;
  }
  &.off {
  color: #ccc;
  }
`;
