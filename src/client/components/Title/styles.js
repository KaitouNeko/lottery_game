import styled from 'styled-components'

const TitleWrapper = styled.div`
color: ${({ theme }) => theme.colors.title.hoverText};
box-shadow: 3px 4px 2px ${({ theme }) => theme.colors.title.boxShadow};
border: 2px solid;
padding: 5px 10px;
border-radius: 5px;
margin: 15px 0px;

transition: .3s all;
cursor: pointer;
span {
  padding-left: 10px;
}
&:hover {
  color: ${({ theme }) => theme.colors.title.text};
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.title.boxShadow};
  text-shadow: 0px 1px ${({ theme }) => theme.colors.title.hoveTextShadow};
  transition: .3s all;
}
@media (min-width: 768px) {
    margin: 30px 0px;
  } 

`;

export { TitleWrapper }
