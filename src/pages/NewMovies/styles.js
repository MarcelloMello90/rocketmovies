import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  max-width: 800px;
  margin: 38px auto;
  display: flex;
  flex-direction: column;
  /* gap: 35px; */
  
  > header{ 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;

    margin-bottom: 40px;
   
    a{
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.TEXT_500};
      align-items: center;
    }
  }

  .inputTitle{
    font-size: 16px;
    padding-left: 16px;
    display: flex;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.TEXT_500};
    }
  }
  
  .bookmarks{
    display: flex;
    flex-wrap: wrap;
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_900 };


    align-items: flex-start;
    padding: 16px;
    gap: 24px;

    border-radius: 8px; 
  }

  > Button{
    width: 200px;
    height: 45px;
  }
`;
