import styles from './MultiSelect.module.css';
import arrowDownSrc from '../../assets/icons/arrow-down.svg';

const MultiSelect = () => {
  return (
    <div className={styles.multiSelect}>
      <div>Tipologia</div>
      <img src={arrowDownSrc} alt='select arrow' />
    </div>
  );
};

export default MultiSelect;
