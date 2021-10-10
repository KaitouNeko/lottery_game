import {
  useRef, memo, useCallback, useEffect, useState
} from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import noop from 'lodash/noop';

// redux
import { useDispatch, useSelector } from 'react-redux';
import withRedux from '@lib/redux/withRedux';

import { Input, Title } from '@components'
import {
  checkNumberValidation, checkFormateValid,
  parseISOString, convertISOString, getRandomInt
} from '@utils'
import {
  HOUR, MINUTES, SECONDS
} from '@utils/durationType'

import { TimerWrapper, TimerTip, TimerArea } from './styles'

const Timer = ({
  defaultDuration, isStart, openWinnerDialog, isWinnerVisible
}) => {
  const [duration, setDuration] = useState(null);
  const [firstStart, setFirstStart] = useState(isStart);
  const [Start, setStart] = useState(null);
  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();
  const timerId = useRef(null);
  const {
    hours, minutes, seconds
  } = parseISOString(duration);
  const validation = useCallback((ref) => {
    if (!ref.current) return;
    try {
      checkFormateValid(ref.current.value)
        .catch((error) => {
          console.warn(`${error}`)
          ref.current.value = ''
          return false
        });
      checkNumberValidation(ref).catch((error) => {
        console.warn(`${error}`)
        ref.current.value = ''
        return false
      });
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const setTimer = useCallback(() => {
    if (!hourRef.current && !minRef.current && !secRef.current) return
    if (!firstStart) setFirstStart(true);
    if (!Start) setStart(true);
    const hour = hourRef.current.value;
    const minute = minRef.current.value;
    const second = secRef.current.value;
    const setNewTime = convertISOString({ hour, minute, second })
    setDuration(setNewTime);
    // clear Input Value
    hourRef.current.value = ''
    minRef.current.value = ''
    secRef.current.value = ''
  }, [hourRef, minRef, secRef, firstStart, Start])

  const counter = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      const nextDuration = moment.duration(duration).subtract(1, 'seconds').toISOString();
      const {
        hours: nextHours, minutes: nextMinutes, seconds: nextSeconds
      } = parseISOString(nextDuration)
      const isTimeout = nextHours <= 0 && nextMinutes <= 0 && nextSeconds < 0
      if (isTimeout) {
        if (timerId.current) {
          clearTimeout(timerId.current);
        }
        if (Start) {
          setStart(false)
          openWinnerDialog(isWinnerVisible)
        }
        return
      }

      setDuration(nextDuration);
    }, 1000);
  }, [timerId, duration, openWinnerDialog, isWinnerVisible, Start])

  useEffect(() => {
    if (!defaultDuration) return
    if (!moment.duration(defaultDuration).isValid()) return
    setDuration(defaultDuration)
  }, [])

  useEffect(() => {
    if (firstStart) {
      counter()
    }
  }, [counter, duration, firstStart])

  return (
    <>
      <Title onClick={setTimer} />
      <TimerWrapper>
        <TimerArea>
          <Input
            id={HOUR}
            myRef={hourRef}
            maxLength='2'
            min='0'
            onChange={() => validation(hourRef)}
          />
          <p>{hours || '00'}</p>
          <TimerTip>Hours</TimerTip>
        </TimerArea>
        <TimerArea>
          <Input
            id={MINUTES}
            myRef={minRef}
            maxLength='2'
            min='0'
            onChange={() => validation(minRef)}
          />
          <p>{minutes || '00'}</p>
          <TimerTip>Minutes</TimerTip>
        </TimerArea>
        <TimerArea>
          <Input
            id={SECONDS}
            myRef={secRef}
            maxLength='2'
            min='0'
            onChange={() => validation(secRef)}
          />
          <p>{seconds || '00'}</p>
          <TimerTip>Seconds</TimerTip>
        </TimerArea>
      </TimerWrapper>
    </>
  )
}

Timer.propTypes = {
  defaultDuration: PropTypes.string,
  isStart: PropTypes.bool,
  openWinnerDialog: PropTypes.func,
  isWinnerVisible: PropTypes.bool
};
Timer.defaultProps = {
  defaultDuration: 'P0D',
  isStart: false,
  openWinnerDialog: noop,
  isWinnerVisible: false
};

export default memo(withRedux(Timer))
