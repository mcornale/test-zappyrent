import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

import closeIconSrc from '../../assets/icons/close.svg';

import styles from './Modal.module.css';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Modal = (props: Props) => {
  const { children } = props;

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCloseBtnClick = () => {
    navigate(-1);
  };

  return createPortal(
    <>
      <div className={styles.modalWindow}>
        <button
          onClick={handleCloseBtnClick}
          className={styles.modalWindowCloseBtn}
        >
          <img src={closeIconSrc} alt='close modal' />
        </button>
        {children}
      </div>
      <div className={styles.modalBackdrop}></div>
    </>,
    document.getElementById('modal')!
  );
};

export default Modal;
