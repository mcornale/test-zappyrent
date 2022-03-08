import styles from './MultiSelect.module.css';
import arrowDownIconSrc from '../../assets/icons/arrow-down.svg';
import CheckBox from '../CheckBox/CheckBox';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChangeSelectedOptions: Dispatch<SetStateAction<string[]>>;
};

const MultiSelect = (props: Props) => {
  const { label, options, selectedOptions, onChangeSelectedOptions } = props;

  const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(false);
  const [activeOptionsArr, setActiveOptionsArr] =
    useState<string[]>(selectedOptions);

  const activeOptionsLength = activeOptionsArr.length;

  //choice of the label to show
  let multiSelectLabel =
    !isMultiSelectOpen && activeOptionsLength > 0 ? activeOptionsArr[0] : label;
  if (!isMultiSelectOpen && activeOptionsLength > 1)
    multiSelectLabel += ` + ${activeOptionsLength - 1}`;

  //choice of the classnames to give to the multi select element
  const multiSelectClassNameArr = [styles.multiSelect];
  if (isMultiSelectOpen) multiSelectClassNameArr.push(styles.multiSelectOpen);
  if (!isMultiSelectOpen && activeOptionsArr.length > 0)
    multiSelectClassNameArr.push(styles.multiSelectOptionsActive);

  //change selected options in the context when multiselect is closed
  useEffect(() => {
    if (!isMultiSelectOpen) onChangeSelectedOptions(activeOptionsArr);
  }, [isMultiSelectOpen, activeOptionsArr, onChangeSelectedOptions]);

  //event handlers
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
        <img src={arrowDownIconSrc} alt='select arrow' />
      </button>
      {isMultiSelectOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-20%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-20%' }}
          className={styles.multiSelectOptions}
        >
          {options.map((option, index) => (
            <CheckBox
              key={index}
              onChange={handleOptionCheckBoxChange.bind(null, option)}
              label={option}
              checked={activeOptionsArr.includes(option)}
              labelAfter
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MultiSelect;
