import styles from './CheckBox.module.css';

const CheckBox = () => {
  return (
    <label className={styles.checkBoxGroup}>
      Disponibile subito
      <input type='checkbox' />
      <div className={styles.checkBox}></div>
    </label>
  );
};

export default CheckBox;
