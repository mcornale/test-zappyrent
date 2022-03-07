import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    navigate('/');
  };

  return createPortal(
    <>
      <motion.div
        initial={{ x: '-50%', y: '80%' }}
        animate={{ x: '-50%', y: '-50%' }}
        exit={{ x: '-50%', y: '80%' }}
        transition={{ type: 'tween', duration: 0.6 }}
        className={styles.modalWindow}
      >
        <button
          onClick={handleCloseBtnClick}
          className={styles.modalWindowCloseBtn}
        >
          <img src={closeIconSrc} alt='close modal' />
        </button>
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.modalBackdrop}
      ></motion.div>
    </>,
    document.getElementById('modal')!
  );
};

export default Modal;
