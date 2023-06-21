import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.TEXT_600};
  
  border: none;
  font-size: 16px;
  font-weight: 400;

  > div{
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;