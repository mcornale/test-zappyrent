import { useContext } from 'react';
import { PropertiesContext } from '../../../context/PropertiesContext';
import Error from '../../Error/Error';
import PropertyItem from '../PropertyItem/PropertyItem';

import styles from './PropertyItemList.module.css';

const PropertyItemList = () => {
  const { properties, isFetching, errorFetchingProperties } =
    useContext(PropertiesContext)!;

  const propertyItemListWrapperClassNameArr = [styles.propertyItemListWrapper];
  if (isFetching)
    propertyItemListWrapperClassNameArr.push(
      styles.propertyItemListWrapperOverlay
    );

  return (
    <>
      {errorFetchingProperties && <Error error={errorFetchingProperties} />}
      {!errorFetchingProperties && (
        <div className={propertyItemListWrapperClassNameArr.join(' ')}>
          {!isFetching && <p>{properties?.length} alloggi trovati</p>}
          <section className={styles.propertyItemList}>
            {properties.map((propertyItem) => (
              <PropertyItem key={propertyItem.id} propertyItem={propertyItem} />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default PropertyItemList;
