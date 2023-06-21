import styled from "styled-components";

export const Container = styled.section`
  margin: 56px 0 28px;

  > h2{
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_700};
  };
`;