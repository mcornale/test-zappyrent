import CheckBox from '../CheckBox/CheckBox';
import MultiSelect from '../MultiSelect/MultiSelect';
import { PROPERTIES_TYPES } from '../../constants/properties-types';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <MultiSelect options={PROPERTIES_TYPES} />
      <CheckBox label='Disponibile subito' />
    </div>
  );
};

export default FilterBar;
