import moment from 'moment';

const convertISOString = ({
  hour, minute, second
}) => (
  moment
    .duration(second, 'seconds')
    .add(minute, 'minutes')
    .add(hour, 'hours')
    .toISOString()
)

export default convertISOString
