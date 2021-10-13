import { useEffect, useCallback, useState } from 'react'

// redux
import { useDispatch } from 'react-redux';
import { setMemberList, setWinner } from '@lib/redux/action';
import withRedux from '@lib/redux/withRedux';

import { getRandomInt } from '@utils'
import {
  Layout, Navbar, Timer, LotteryDialog, Button, WinnerDialog
} from '@components'
import useGetMemberList from '@hooks/useGetMemberList';

const Home = () => {
  const dispatch = useDispatch();

  const {
    loading, error, data, limit
  } = useGetMemberList()
  const [isVisible, setIsVisible] = useState(false)
  const [isWinnerVisible, setIsWinnerVisible] = useState(false)
  const openLotteryDialog = () => {
    setIsVisible(!isVisible)
  }
  const openWinnerDialog = () => {
    setIsWinnerVisible(!isWinnerVisible)
  }

  const RandomWinner = useCallback((maxRange) => {
    const winnerKey = getRandomInt(0, maxRange);
    const winner = data[winnerKey];
    if (winner) {
      dispatch(setWinner(winner))
    }
  }, [dispatch, data])

  useEffect(() => {
    if (!loading && data) {
      RandomWinner(limit)
      dispatch(setMemberList(data));
    }
  }, [loading, data, limit, dispatch, RandomWinner])

  const handleWinnerClose = useCallback(async () => {
    await openWinnerDialog()
    await RandomWinner(limit)
  }, [openWinnerDialog, limit, RandomWinner])

  return (
    <Layout>
        <Timer openWinnerDialog={setIsVisible} isWinnerVisible />
        <Navbar />
        <Button text='Member List' onClick={openLotteryDialog} />
        <LotteryDialog title='Member List' onClick={openLotteryDialog} isVisible={isVisible} />
        <WinnerDialog title='WANTED' onClick={handleWinnerClose} isVisible={isWinnerVisible} />
    </Layout>
  )
}

export default withRedux(Home)
