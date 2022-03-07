import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CURRENCIES } from '../../../constants/currencies';
import { PropertiesContext } from '../../../context/PropertiesContext';
import { PropertyItemType } from '../../../types/properties';
import Card from '../../Card/Card';
import styles from './PropertyItem.module.css';

type Props = {
  propertyItem?: PropertyItemType;
};

const PropertyItem = (props: Props) => {
  let { propertyItem } = props;

  const { properties } = useContext(PropertiesContext)!;

  const { propertyTitle } = useParams();
  if (propertyTitle && !propertyItem)
    propertyItem = properties.find(
      (property) =>
        property.title.toLowerCase() === propertyTitle.split('-').join(' ')
    );

  return (
    <Card className={styles.propertyItem}>
      <div className={styles.propertyItemImageWrapper}>
        {propertyItem?.available && (
          <p className={styles.propertyItemAvailableBanner}>
            Disponibile subito
          </p>
        )}
        <img
          className={styles.propertyItemImage}
          src={propertyItem?.images[0].url}
          alt=''
        />
      </div>
      <div className={styles.propertyItemData}>
        <div className={styles.propertyItemDetails}>
          <h5 className={styles.propertyItemType}>{propertyItem?.type}</h5>
          <h3>{propertyItem?.title}</h3>
          <div className={styles.propertyItemDetailsRow}>
            <p>
              <span>{propertyItem?.tenants}</span> inquilini
            </p>
            <p>
              <span>{propertyItem?.baths}</span> bagno
            </p>
            <p>
              <span>{propertyItem?.beds}</span> letti
            </p>
          </div>
          <p className={styles.propertyItemDescription}>
            {propertyItem?.description}
          </p>
        </div>
        <div className={styles.propertyItemPrice}>
          <h4>Canone d'affitto</h4>
          <p className={styles.propertyItemPriceValue}>
            <span>{`${propertyItem && CURRENCIES[propertyItem.currency]} ${
              propertyItem?.price
            }`}</span>{' '}
            /mese
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PropertyItem;
