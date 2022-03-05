import { useState } from 'react';
import styles from './CheckBox.module.css';

type Props = {
  label: string;
  labelAfter?: boolean;
  onChange?: () => void;
  checked?: boolean;
};

const CheckBox = (props: Props) => {
  const { label, labelAfter, onChange, checked } = props;

  const [isChecked, setIsChecked] = useState(checked ?? false);

  const handleCheckBoxChange = () => {
    setIsChecked((prevCheckBoxState) => !prevCheckBoxState);
    if (onChange) onChange();
  };

  return (
    <label
      className={`${styles.checkBoxGroup} ${
        labelAfter && styles.checkBoxGroupLabelAfter
      }`}
    >
      {label}
      <input
        onChange={handleCheckBoxChange}
        type='checkbox'
        checked={isChecked}
      />
      <div className={styles.checkBox}></div>
    </label>
  );
};

export default CheckBox;
