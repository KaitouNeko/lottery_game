import {
  HOUR, MINUTES, SECONDS
} from '@utils/durationType'

const checkNumberValidation = (ref) => new Promise((resolve, reject) => {
  const { value } = ref.current;
  const { id } = ref.current;
  const duration = Number(value)

  switch (id) {
    case HOUR:
      if (duration >= 24) {
        const Err = `${HOUR} < 24`
        reject(Err);
      }
      resolve(true)
      break;
    case MINUTES:
      if (duration >= 60) {
        const Err = `${MINUTES} < 60`
        reject(Err);
      }
      resolve(true)
      break;
    case SECONDS:
      if (duration >= 60) {
        const Err = `${SECONDS} < 60`
        reject(Err);
      }
      resolve(true)
      break;
    default:
      break;
  }
})

export default checkNumberValidation
