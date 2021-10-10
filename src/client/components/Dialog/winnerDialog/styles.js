import styled from 'styled-components'

const ModalContent = styled.div`
  margin-bottom: 15px;
`

const ModalCard = styled.div`
  font-size: 14px;

@media (min-width: 768px) {
  display: inline-block;
  width: 50%;
  font-size: 20px;
}
`
export {
  ModalContent,
  ModalCard
}
