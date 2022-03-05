import { PropertyItemListType } from '../../../types/properties';
import PropertyItem from '../PropertyItem/PropertyItem';

import styles from './PropertyItemList.module.css';

const PropertyItemList = (props: PropertyItemListType) => {
  const { properties } = props;

  return (
    <section className={styles.propertyItemList}>
      {properties.map((propertyItem) => (
        <PropertyItem key={propertyItem.id} {...propertyItem} />
      ))}
    </section>
  );
};

export default PropertyItemList;
