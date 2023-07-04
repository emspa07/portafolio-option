import styled from "styled-components";

const AboutWrapper = styled.section`
  height: 100%;
  padding: 5rem 0;
  background:var(--color-primary);
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (min-width: 240px) and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: .5rem;
  }


`;
const AboutImage = styled.div`
  padding: 2rem;
    .imgAbout{
      width: 100%;
      height: auto;
    }

`;
const AboutDescription = styled.div`
  line-height: 2.5rem; 

    h2{
      font-family: 'Syncopate', sans-serif;
      font-size: 4rem;
      font-style: italic;
    }
    h3{
      font-family: 'Merriweather Sans', sans-serif;
      font-size: 1.3rem;
      padding: 3rem 0;
    }
    p{
      font-family: 'Lora', sans-serif;
      padding: .5rem 0;
    }

    @media (min-width: 240px) and (max-width: 720px) {
      padding: 2rem;
      line-height: 2rem; 

      h2{
        font-size: 2rem;
      }
      h3{
        font-size: 1.1rem;
        padding: 2rem 0;
      }
      p{
        text-align: justify;
      }
    }

`;

export { AboutWrapper, AboutImage, AboutDescription};