import styled from 'styled-components'

const ButtonWrapper = styled.div`
font-size: 1em;
display: inline-block;  
margin: 1em;
padding: 0.25em 2em;
border-radius: 3px;
color: ${({ theme }) => theme.colors.button.text};
border: 2px solid ${({ theme }) => theme.colors.button.borderColor};
background-color: ${({ theme }) => theme.colors.button.backgroundColor};
cursor: pointer;
transition: .3s all;
&:hover {
    transition: .3s all;
    border: 2px solid ${({ theme }) => theme.colors.button.hoverBorderColor};
    background-color: ${({ theme }) => theme.colors.button.hoverBackgroundColor};
}
`;

export default ButtonWrapper
