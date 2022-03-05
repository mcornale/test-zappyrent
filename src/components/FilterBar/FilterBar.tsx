import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import { PROPERTY_TYPES } from '../../constants/property-types';
import styles from './FilterBar.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setSelectedPropertyTypes: Dispatch<SetStateAction<string[]>>;
  setOnlyAvailableProperties: Dispatch<SetStateAction<boolean>>;
};

const FilterBar = (props: Props) => {
  const { setSelectedPropertyTypes, setOnlyAvailableProperties } = props;

  const handleOnlyAvailablePropertiesChange = () => {
    setOnlyAvailableProperties(
      (prevOnlyAvailableProperties) => !prevOnlyAvailableProperties
    );
  };

  return (
    <div className={styles.filterBar}>
      <MultiSelect
        label='Tipologia'
        options={PROPERTY_TYPES}
        onChangeSelectedOptions={setSelectedPropertyTypes}
      />
      <CheckBox
        label='Disponibile subito'
        onChange={handleOnlyAvailablePropertiesChange}
      />
    </div>
  );
};

export default FilterBar;
