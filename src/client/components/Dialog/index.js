import {
  useRef, useEffect, useCallback, useState
} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {
  Backdrop,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalCloseBtn
} from './styles'

const Dialog = ({
  title, isVisible, children, maxWidth, target, onClose
} = { children: [] }) => {
  // 將彈跳視窗移出到特定的元素上
  if (typeof window === 'undefined') {
    return null;
  }
  const portalTarget = target || document.body

  // 點選 Backdrop (不含modal) 來關閉彈跳視窗
  const modalRef = useRef(null)
  const handleBackdropClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  // 收到按下 Esc 鍵的事件時關閉彈跳視窗
  const handleKeyDown = useCallback(
    (e) => {
      const { keyCode } = e
      if (keyCode === 27) onClose()
    },
    [onClose]
  )

  // 監看 window 下的所有 keydown 事件
  useEffect(() => {
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [handleKeyDown, isVisible])

  // 記住原本在 html 及 body 的 overflow 樣式 (當 modal 消失時復原樣式使用)
  const [[htmlOverflow, bodyOverflow]] = useState([document.querySelector('html').style.overflow, document.querySelector('body').style.overflow])

  // 讓畫面被鎖定來避免畫面滾動的混亂
  useEffect(() => {
    if (isVisible) {
      document.querySelector('html').style.overflow = 'hidden'
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('html').style.overflow = htmlOverflow
      document.querySelector('body').style.overflow = bodyOverflow
    }
  }, [bodyOverflow, htmlOverflow, isVisible])

  // render
  return isVisible
    ? ReactDOM.createPortal(

      <Backdrop onClick={handleBackdropClick}>
        {/* 彈跳視窗 */}
        <Modal ref={modalRef} maxWidth={maxWidth}>

          {/* 標頭 */}
          <ModalHeader>
            <ModalTitle> {title} </ModalTitle>
            <ModalCloseBtn onClick={onClose} />
          </ModalHeader>

          {/* 內容 */}
          <ModalContent>
            {children}
          </ModalContent>

        </Modal>
      </Backdrop>,
      portalTarget
    )
    : null
}

Dialog.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  maxWidth: PropTypes.string,
  onClose: PropTypes.func.isRequired
}

export default Dialog
