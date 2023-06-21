import styled from "styled-components";

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; */
    
  display: flex;
  align-items: center;
  width: fit-content;
  

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.TEXT_500}` : "none"};

  border-radius: 10px;
  /* padding-right: 16px; */

  > button {
    border: none;
    background: none;
    
  }

  .button-delete,
  .button-add{
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    display: flex;
    font-size: 24px;
    align-items: center;
  }

  > input {
    height: 50px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    padding: 16px;
    color: ${({ theme }) => theme.COLORS.TEXT_200};
    background: transparent;  

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_500};
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;