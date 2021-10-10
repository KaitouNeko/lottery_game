import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { useIntersection } from '@hooks/intersectionObserver';
import { ImgWrapper } from './styles';

const LotteryCard = ({
  url, thumb, alt
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  return (
    <ImgWrapper
      className='image-container'
      ref={imgRef}
    >
      {isInView && (
        <>
          <img
            className={classnames('image', 'thumb', {
              isLoaded: !!isLoaded
            })}
            src={thumb}
            alt={alt}
          />
          <img
            className={classnames('image', {
              isLoaded: !!isLoaded
            })}
            src={url}
            alt={alt}
            onLoad={handleOnLoad}
          />
          <p className={classnames({
            isLoaded: !!isLoaded
          })}
          >{alt}
          </p>
        </>
      )}
    </ImgWrapper>
  );
};

export default LotteryCard;
