import React, { memo } from 'react'
import noop from 'lodash/noop'

// redux
import { useSelector } from 'react-redux';
import withRedux from '@lib/redux/withRedux';

// locale modules
import Dialog from '@components/Dialog'
import { LotteryCard } from '@components'
import {
  ModalContent, ModalCard
} from './styles'

const LotteryDialog = (props) => {
  const title = props?.title;
  const data = useSelector((state) => state.memberList) || [];
  const handleToggleModalShowUp = props?.onClick || noop;
  const isVisible = props?.isVisible || false;

  return (
    <>
      {/* 彈跳視窗 */}
      <Dialog
        title={title}
        isVisible={isVisible}
        onClose={handleToggleModalShowUp}
      >
        <ModalContent>
          {
            data.map(({ name, picture }, idx) => {
              const nameFirst = name?.first || '';
              const nameLast = name?.last || '';
              const thumbnail = picture?.thumbnail || '';
              const medium = picture?.medium || '';
              return (
                <ModalCard key={`${nameFirst}${nameLast}`}>
                  <LotteryCard
                    url={medium}
                    thumb={thumbnail}
                    alt={`${nameFirst}${nameLast}`}
                  />
                </ModalCard>
              )
            })
          }
        </ModalContent>
      </Dialog>
    </>
  )
}

export default memo(withRedux(LotteryDialog))
