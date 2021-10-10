import styled from 'styled-components'

const ModalContent = styled.div`
  margin-bottom: 15px;
`

const ModalCard = styled.section`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
padding: 5px 0px;
border-bottom: 1px solid #212121;
width: 100%;
cursor: pointer;
  p {
    display: inline-block;
    width: 80%;
    font-size: 20px;
  }
  &:hover{
    background: #9e9e9e1c;
  }

@media (min-width: 768px) {
  font-size: 20px;
}
`

export {
  ModalContent,
  ModalCard
}
