import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import { PROPERTY_TYPES } from '../../constants/property-types';
import styles from './FilterBar.module.css';
import { useContext } from 'react';
import { PropertiesContext } from '../../context/PropertiesContext';

const FilterBar = () => {
  const { setShowOnlyAvailableProperties, setSelectedPropertyTypes } =
    useContext(PropertiesContext)!;

  const handleShowOnlyAvailablePropertiesChange = () => {
    setShowOnlyAvailableProperties(
      (prevShowOnlyAvailableProperties) => !prevShowOnlyAvailableProperties
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
        onChange={handleShowOnlyAvailablePropertiesChange}
      />
    </div>
  );
};

export default FilterBar;
