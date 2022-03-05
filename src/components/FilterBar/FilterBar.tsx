import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import { PROPERTY_TYPES } from '../../constants/property-types';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <MultiSelect options={PROPERTY_TYPES} />
      <CheckBox label='Disponibile subito' />
    </div>
  );
};

export default FilterBar;
