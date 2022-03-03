import propertyItemsData from '../../../assets/db.json';
import PropertyItem from '../PropertyItem/PropertyItem';

import styles from './PropertyItemList.module.css';

const PropertyItemList = () => {
  console.log(propertyItemsData);

  return (
    <section className={styles.propertyItemList}>
      {propertyItemsData.map((propertyItem) => (
        <PropertyItem key={propertyItem.id} {...propertyItem} />
      ))}
    </section>
  );
};

export default PropertyItemList;
