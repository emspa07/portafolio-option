import styled from "styled-components";

const HeroWrapper = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: var(--color-secondary);
  color: var(--color-primary);
`;
const HeroDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 240px) and (max-width: 880px) {
    justify-content: center;
    text-align:center;
    flex-direction:column;
  }
`;
const HeroText = styled.div`
padding: 0 5rem;
    p {
        font-size: 1.5rem;
        font-weight: 100;
        font-family: 'Lora', serif;
        line-height: 1.5em;
        letter-spacing: .122rem;

    }
        @media (min-width: 240px) and (max-width: 880px) {            
          paddin: 0 2rem;  
          p{
                font-size: 15px;
            }
         }
`;
const HeroInfo = styled.div`
  padding: 0 5rem;
    h2 {
        font-weight: 700;
        font-size: 4rem;
        font-family: 'Syncopate', sans-serif;
        line-height: 1.5em;
    }
    h2:hover{
        font-style: italic;
        transition: all 100ms ease-in-out;
    }

    @media (min-width: 240px) and (max-width: 880px) {            
        padding: 2rem;
        h2{
            font-size: 25px;
        }
     }

`;

export { HeroWrapper, HeroText, HeroDescription, HeroInfo };