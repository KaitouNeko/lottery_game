import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { useIntersection } from '@hooks/intersectionObserver';
import {
  ImgWrapper, ModalName,
  ModalMail
} from './styles';

const WinCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  const nameFirst = props?.data?.name?.first;
  const nameLast = props?.data?.name?.last;
  const url = props?.data?.picture?.large;
  const thumbnail = props?.data?.picture?.thumbnail;
  const phone = props?.data?.phone;
  const email = props?.data?.email;

  return (
    <ImgWrapper
      className='image-container'
      ref={imgRef}
    >
      {isInView && (
        <>
          <img
            className={classnames('image winner', 'thumb', {
              isLoaded: !!isLoaded
            })}
            src={thumbnail}
            alt={`${nameFirst}${nameLast}`}
          />
          <img
            className={classnames('image winner', {
              isLoaded: !!isLoaded
            })}
            src={url}
            alt={`${nameFirst}${nameLast}`}
            onLoad={handleOnLoad}
          />
          <ModalName className={classnames({
            isLoaded: !!isLoaded
          })}
          >{`${nameFirst}${nameLast}`}
          </ModalName>

          <ModalName className={classnames({
            isLoaded: !!isLoaded
          })}
          >{phone}
          </ModalName>
          <ModalMail className={classnames({
            isLoaded: !!isLoaded
          })}
          >{email}
          </ModalMail>
        </>
      )}
    </ImgWrapper>
  );
};

export default WinCard;
