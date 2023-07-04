import styled from "styled-components"

const ButtonWrapper = styled.button`
    border: 2px solid #1A1818;
    background-color: transparent;
    margin: 1rem;
    font-weight: bold;
    font-size: 1rem;
    padding: .8em 4em;
    cursor: pointer;
    transition: background 200ms ease-in, color 200ms ease-in;
    flex: display;
    &:hover {
        background: #1A1818;
        color: #ece7e1;
    }
`;

const Button = (props) =>{
    return(
        <ButtonWrapper>{props.title}</ButtonWrapper>
    )
}

export default Button