import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) =>  theme.COLORS.BACKGROUND_600};
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  
  > span{
    display: flex;
    height: 30px;
    justify-content: center;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.TEXT_300};
    border-radius: 10px;
    align-items: center;

  }
`;