import moment from 'moment';

const parseISOString = (duration) => {
  const displayTime = moment.duration(duration);
  const hours = displayTime.hours()
  const minutes = displayTime.minutes()
  const seconds = displayTime.seconds()
  return {
    hours, minutes, seconds
  }
}

export default parseISOString
