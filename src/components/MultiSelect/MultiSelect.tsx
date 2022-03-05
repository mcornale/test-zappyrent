import styles from './MultiSelect.module.css';
import arrowDownSrc from '../../assets/icons/arrow-down.svg';
import CheckBox from '../CheckBox/CheckBox';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Props = {
  label: string;
  options: string[];
  onChangeSelectedOptions: Dispatch<SetStateAction<string[]>>;
};

const MultiSelect = (props: Props) => {
  const { label, options, onChangeSelectedOptions } = props;

  const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(false);
  const [activeOptionsArr, setActiveOptionsArr] = useState<string[]>([]);

  const activeOptionsLength = activeOptionsArr.length;

  let multiSelectLabel =
    !isMultiSelectOpen && activeOptionsLength > 0 ? activeOptionsArr[0] : label;
  if (!isMultiSelectOpen && activeOptionsLength > 1)
    multiSelectLabel += ` + ${activeOptionsLength - 1}`;

  const multiSelectClassNameArr = [styles.multiSelect];
  if (isMultiSelectOpen) multiSelectClassNameArr.push(styles.multiSelectOpen);
  if (!isMultiSelectOpen && activeOptionsArr.length > 0)
    multiSelectClassNameArr.push(styles.multiSelectOptionsActive);

  useEffect(() => {
    if (!isMultiSelectOpen) onChangeSelectedOptions(activeOptionsArr);
  }, [isMultiSelectOpen, activeOptionsArr, onChangeSelectedOptions]);

  const handleMultiSelectClick = () => {
    setIsMultiSelectOpen(
      (prevIsMultiSelectOpenState) => !prevIsMultiSelectOpenState
    );
  };

  const handleOptionCheckBoxChange = (optionChanged: any) => {
    setActiveOptionsArr((prevActiveOptionsArr) => {
      const newActiveOptionsArr = [...prevActiveOptionsArr];

      if (newActiveOptionsArr.includes(optionChanged)) {
        newActiveOptionsArr.splice(
          newActiveOptionsArr.findIndex((option) => option === optionChanged),
          1
        );
      } else newActiveOptionsArr.push(optionChanged);

      return newActiveOptionsArr.sort();
    });
  };

  return (
    <div className={styles.multiSelectWrapper}>
      <button
        onClick={handleMultiSelectClick}
        className={multiSelectClassNameArr.join(' ')}
      >
        <label>{multiSelectLabel}</label>
        <img src={arrowDownSrc} alt='select arrow' />
      </button>
      {isMultiSelectOpen && (
        <div className={styles.multiSelectOptions}>
          {options.map((option, index) => (
            <CheckBox
              key={index}
              onChange={handleOptionCheckBoxChange.bind(null, option)}
              label={option}
              checked={activeOptionsArr.includes(option)}
              labelAfter
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
