import styled from "styled-components";

const FormSection = styled.section`
width: 100%;
padding: 2rem 0;
h2 {
  font-size: 4rem;
  font-family: 'Syncopate', sans-serif;
  font-style: italic;
  padding: 2rem;
  letter-spacing: 2px;
  color: var(--color-secondary);
}
@media (min-width: 240px) and (max-width: 880px) {    
  h2{
    font-size: 2rem;
    line-height: 1.5;
  }
}
`
const ContactList = styled.div`
display: flex;
justify-content: center;
padding: 5rem;
ul li {
    list-style: none;
    display: inline;
    padding: 2rem;
  }

  ul li a {
    text-decoration: none;
    padding: 1rem;
    color: var(--color-light-primary);
    font-size:10rem;
  }

  @media (min-width:240px) and (max-width:720px) {
    flex-direction:column;
    align-items: center;
    ul li a{
      font-size: 8rem;
    }
  }  
`;

export {FormSection, ContactList}