import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.TEXT_500};

  margin-bottom: 8px;
  border-radius: 10px;

  > input{
    height: 56px;
    width: 150px;


    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.TEXT_500};
    }

  }

  > svg{
      margin: 0 16px;
    }
`;