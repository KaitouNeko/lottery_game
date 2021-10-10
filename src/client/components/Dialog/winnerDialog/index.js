import React, { memo } from 'react'
import noop from 'lodash/noop'

// redux
import { useSelector } from 'react-redux';
import withRedux from '@lib/redux/withRedux';
import Dialog from '@components/Dialog'
import { WinCard } from '@components'
import {
  ModalContent, ModalCard, ModalName,
  ModalMail
} from './styles'

const WinnerDialog = (props) => {
  const title = props?.title;
  const handleToggleModalShowUp = props?.onClick || noop;
  const isVisible = props?.isVisible || false;
  const winner = useSelector((state) => state.winner);
  return (
    <>
      {/* 彈跳視窗 */}
      <Dialog
        title={title}
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >
        <ModalContent>
          <WinCard data={winner} />
        </ModalContent>
      </Dialog>
    </>
  )
}

export default memo(withRedux(WinnerDialog))
