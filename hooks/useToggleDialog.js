import { useState } from 'react';

const useToggleDialog = (isDisplay = false) => {
  const [isVisible, setIsVisible] = useState(isDisplay)
  const handleToggleModalShowUp = () => {
    setIsVisible(!isVisible)
  }
  return { isVisible, handleToggleModalShowUp, setIsVisible }
}

export default useToggleDialog
