import styled from 'styled-components'

const Backdrop = styled.div`
  background: #0000002e;
  /* z-index: 99; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.modal.backgroundColor};
  border-radius: 5px;
  width: 100%;
  max-width: 80%;
  min-width: 280px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 290px;
  @media (min-width: 768px) {
    max-width: 60%;
    width: 400px;
  }

`

const ModalHeader = styled.div`
  padding: 20px 20px 10px;
  display: flex;
  position: relative;
`

const ModalTitle = styled.div`
  font-family: fantasy;
  font-size: 60px;
  font-weight: bold;
  flex: 1;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const ModalContent = styled.div`
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  max-height: 50vh;
  min-height: 50vh;
`

const ModalCloseBtn = styled.div`
  cursor:pointer;
  position: absolute;
  right: 15px;
  top: 15px;
  width: 15px;
  height: 15px;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }

  :before, :after {
    position: absolute;
    left: 7px;
    content: ' ';
    height: 15px;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.modal.text};
  }

  :before {
    transform: rotate(45deg);
  }
  
  :after {
    transform: rotate(-45deg);
  }

`

export {
  Backdrop,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalCloseBtn
}
