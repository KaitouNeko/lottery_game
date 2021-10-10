import styled from 'styled-components'

const ImgWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    p {
        opacity: 0;
        &.isLoaded {
            transition: opacity 1s ease-out;
            opacity: 1;
        }
    }
    img {
        display: inline-block;
        width: 48px;
        opacity: 0;
        &.winner {
            width: 150px;
        }
        &.thumb {
            opacity: 1;
            filter: blur(10px);
            transition: opacity 1s ease-out;
            position: absolute;
            &.isLoaded {
            opacity: 0;
            }
        }
        &.isLoaded {
            transition: opacity 1s ease-out;
            opacity: 1;
        }
    }
`
const ModalItem = styled.p`
  font-family: fantasy;
  padding: 5px;
`
const ModalName = styled(ModalItem)`
  font-size: 30px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`
const ModalMail = styled(ModalItem)`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export {
  ImgWrapper,
  ModalName,
  ModalMail
}
