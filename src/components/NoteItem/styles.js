import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 180px;


      min-width: 90px;
      display: flex;
      height: 56px;
      padding: 16px;
      gap: 0;

      background-color: ${({ theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_700};
      border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.TEXT_500}` : "none"};
      border-radius: 10px;


    > button{
        width: 20px;
        
        border: none;
        background-color: ${({ theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_700};
        color: ${({ theme, isNew}) => isNew ? theme.COLORS.TEXT_500 : theme.COLORS.WHITE};
      };

    > input{
       width: 100px;

       background-color: ${({ theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_700};
       color: ${({ theme, isNew}) => isNew ? theme.COLORS.TEXT_500 : theme.COLORS.WHITE};

       border: none;
     
       &::placeholder{
        color: ${({ theme }) => theme.COLORS.TEXT_500};
      }
    }
   /* > div {
  
   } */

`;