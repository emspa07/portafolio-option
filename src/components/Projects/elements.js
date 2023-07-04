import styled from "styled-components";

const PortafolioSection = styled.section`
width: 100%;
padding: 2rem 0;
background: var(--color-secondary);
.title {
    font-size: 4rem;
    font-family: 'Syncopate', sans-serif;
    font-style: italic;
    padding: 2rem;
    letter-spacing: 2px;
    color: var(--color-primary);
}
@media (min-width: 240px) and (max-width: 880px) {    
    .title{
      font-size: 1.9rem;
    }
}
`;
const CardWrapper = styled.div`
display: grid; 
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;
margin: 2rem;
  @media (min-width: 240px) and (max-width: 880px) {
  grid-template-columns: 1fr;
  }
`;
const CardBox = styled.div`
 max-width: 300px;
  border-radius: 0.5rem;
  background-color: #ece7e1;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  img{
    width: 100%;
    height: 40%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    }
`;
const CardContent = styled.div`
  padding: .5rem;
  display: flex;
  flex-direction: column;
  p {
    text-align:justify;
    padding:1rem 0;
    line-height:2rem;
  }
  @media (min-width: 240px) and (max-width: 880px) {   
    padding: 1rem; 
      p{
        font-size:.99rem;
        padding: .5rem 0;
      }
    }
`;
const CardLinks = styled.div`
display: flex;
justify-content: space-between;
align-items: end-start;
  svg {
    width: 25px;
    height: 25px;
    transform: translateY(25%);
  }
  a{
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;
    color:#1A1818;
  }
  a:hover{
    text-decoration: underline;
  }
  @media (min-width: 240px) and (max-width: 880px) {    
    svg{
      width: 13px;
      height: 13px;
    }
    a{
      text-size:10px;
    }
  }
`;

export{CardWrapper, CardBox, CardContent, PortafolioSection, CardLinks };