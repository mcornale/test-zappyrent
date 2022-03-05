import styles from './MultiSelect.module.css';
import arrowDownSrc from '../../assets/icons/arrow-down.svg';
import CheckBox from '../CheckBox/CheckBox';
import { useState } from 'react';

type Props = {
  options: string[];
};

const MultiSelect = (props: Props) => {
  const { options } = props;

  const [isMultiSelectOpen, setMultiSelectOpen] = useState(false);
  const [activeOptionsArr, setActiveOptionsArr] = useState<string[]>([]);

  const multiSelectLabel =
    !isMultiSelectOpen && activeOptionsArr.length > 0
      ? activeOptionsArr[0]
      : 'Tipologia';

  const handleMultiSelectClick = () => {
    setMultiSelectOpen((prevMultiSelectState) => !prevMultiSelectState);
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

      return newActiveOptionsArr;
    });
  };

  return (
    <div className={styles.multiSelectWrapper}>
      <button
        onClick={handleMultiSelectClick}
        className={`${styles.multiSelect} ${
          isMultiSelectOpen && styles.multiSelectOpen
        } ${
          !isMultiSelectOpen &&
          activeOptionsArr.length > 0 &&
          styles.multiSelectOptionsActive
        }`}
      >
        <label>
          {multiSelectLabel}
          {!isMultiSelectOpen &&
            activeOptionsArr.length > 1 &&
            ` + ${activeOptionsArr.length - 1}`}
        </label>
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
