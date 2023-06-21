import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_500};

  display: flex;
  padding: 50px;
  align-items: center;
  gap: 64px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};


  > h1{
    color: ${({ theme }) => theme.COLORS.TEXT_600};
  };

  .inputHeader{
    padding: 0 24px;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;  
  width: fit-content;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    width: fit-content;

    strong{
      color: ${({ theme }) => theme.COLORS.TEXT_400};
      font-weight: 700;
      min-width: 150px;
    }

    a{
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.TEXT_500}
    }
  }

`;