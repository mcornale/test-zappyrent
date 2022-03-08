import { useState } from 'react';
import styles from './CheckBox.module.css';

type Props = {
  label: string;
  labelAfter?: boolean;
  onChange: () => void;
  checked: boolean;
};

const CheckBox = (props: Props) => {
  const { label, labelAfter, checked, onChange } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const checkBoxGroupClassNameArr = [styles.checkBoxGroup];
  if (labelAfter)
    checkBoxGroupClassNameArr.push(styles.checkBoxGroupLabelAfter);

  const handleCheckBoxChange = () => {
    setIsChecked((prevCheckBoxState) => !prevCheckBoxState);
    if (onChange) onChange();
  };

  return (
    <label className={checkBoxGroupClassNameArr.join(' ')}>
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
