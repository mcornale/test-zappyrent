import { PropertyItemType } from '../../../types/properties';
import PropertyItem from '../PropertyItem/PropertyItem';

import styles from './PropertyItemList.module.css';

type Props = {
  isFetching: boolean;
  properties: PropertyItemType[];
};

const PropertyItemList = (props: Props) => {
  const { isFetching, properties } = props;

  const propertyItemListWrapperClassNameArr = [styles.propertyItemListWrapper];
  if (isFetching)
    propertyItemListWrapperClassNameArr.push(
      styles.propertyItemListWrapperOverlay
    );

  return (
    <div className={propertyItemListWrapperClassNameArr.join(' ')}>
      {!isFetching && <p>{properties?.length} alloggi trovati</p>}
      <section className={styles.propertyItemList}>
        {properties.map((propertyItem) => (
          <PropertyItem key={propertyItem.id} {...propertyItem} />
        ))}
      </section>
    </div>
  );
};

export default PropertyItemList;
