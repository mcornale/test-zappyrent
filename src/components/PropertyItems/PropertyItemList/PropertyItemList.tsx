import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesContext } from '../../../context/PropertiesContext';
import Card from '../../Card/Card';
import Error from '../../Error/Error';
import Loader from '../../Loader/Loader';
import PropertyItem from '../PropertyItem/PropertyItem';

import styles from './PropertyItemList.module.css';

const PropertyItemList = () => {
  const { properties, isFetching, errorFetchingProperties } =
    useContext(PropertiesContext)!;

  return (
    <>
      {properties === null && <Loader />}
      {errorFetchingProperties && <Error error={errorFetchingProperties} />}
      {!errorFetchingProperties && (
        <div className={styles.propertyItemListWrapper}>
          <AnimatePresence>
            {isFetching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className={styles.propertyItemListOverlay}
              ></motion.div>
            )}
          </AnimatePresence>
          {properties && <p>{properties?.length} alloggi trovati</p>}
          <section className={styles.propertyItemList}>
            {properties?.map((propertyItem) => (
              <Link
                to={`/${propertyItem?.title
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`}
                key={propertyItem.id}
              >
                <Card>
                  <PropertyItem propertyItem={propertyItem} />
                </Card>
              </Link>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default PropertyItemList;
