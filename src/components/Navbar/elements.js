import styled from "styled-components";

const NavWrapper = styled.header`
width: 100%;
padding: 1rem 0;
`;
const NavList = styled.nav`
display: flex; 
justify-content: space-between;
align-items: center;
button {
  display: none;
}
@media (min-width: 240px) and (max-width: 750px) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      color: var(--color-secondary);
      font-size: 1.5rem;
      border: none;
`;
const NavLogo = styled.h1`
font-family: 'Poppins', sans-serif;
letter-spacing: .1555rem;
    span{
        display: flex;
        flex-direction: column;
        font-size: 10px;
        font-family: 'Lora', sans;
    }
    
    @media (min-width: 240px) and (max-width: 750px) {
        h1{
        font-size: 15px;
    }
 }
`;
const NavItems = styled.ul`
display: flex;
gap: 1rem;

    li {
        list-style: none;
    }
    li .linkmenu{
        text-decoration: none;
        color: var(--color-secondary);
    }

    @media (min-width: 240px) and (max-width: 780px) {
        background:var(--color-primary);
        gap: 2rem;
        left: 0;
        right: 0;
        position: fixed;
        top: 3.5rem;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 500ms all ease-in-out;
        transform: translateX(${({ open }) => (open ? "0" : "-100%")});
    
        li {
          width:90%;
          text-align:center;
          padding: 1rem 0;
        }

        li .linkmenu{
            color: var(--color-secondary);
        }
      }
    `;

export {NavWrapper, NavList, NavLogo, NavItems}