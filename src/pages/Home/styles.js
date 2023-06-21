import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > main{
    grid-area: content;
    width: 1120px;
    margin: 0 auto;
    padding: 40px;
    overflow-y: auto;

    
    > .topMain{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom:40px; 
    }
  }
`;

export const NewMovie = styled(Link)`
  width: 207px;
  height: 48px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


  svg{
    margin-right: 8px;
  }

`;


export const Content = styled.div`
  grid-area: content;
  /* overflow-y: scroll; */
  
  .ContentGroup{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    
    width: 1030px;
    height: 1222.85px;
  }
  
  
  .contentFirst{
    display: flex;
    gap: 15px;
    flex-direction: column;
    border: none;
    border-radius: 16px;
    padding: 32px;  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    margin-right: 40px;

  
    > h2{
      height: 42px;

      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
      color: ${({ theme }) => theme.COLORS.WHITE}
    };

    > .descriptionMoview{
      display: flex;
      text-align: justify;
      align-items: center;
      margin: 15px 0;
      
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${({ theme }) => theme.COLORS.TEXT_700};
    } 

    .tag1{
      display: flex;
      gap: 8px;
    
      > .tagHome{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      }
    }
  };
`;

