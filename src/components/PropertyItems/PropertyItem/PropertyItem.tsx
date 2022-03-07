import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CURRENCIES } from '../../../constants/currencies';
import { PropertiesContext } from '../../../context/PropertiesContext';
import { PropertyItemType } from '../../../types/properties';
import Button from '../../Button/Button';
import styles from './PropertyItem.module.css';

type Props = {
  propertyItem?: PropertyItemType;
};

const PropertyItem = (props: Props) => {
  let { propertyItem } = props;

  const { properties } = useContext(PropertiesContext)!;

  //if propertyTitle is detected in the url find the requested property
  const { propertyTitle } = useParams();
  const isRequestedByUrl = propertyTitle && !propertyItem;
  if (isRequestedByUrl)
    propertyItem = properties?.find(
      (property) =>
        property.title.toLowerCase() === propertyTitle.split('-').join(' ')
    );

  //choice of the classnames to give to the property item element
  const propertyItemClassNameArr = [styles.propertyItem];
  if (isRequestedByUrl)
    propertyItemClassNameArr.push(styles.propertyItemFullInfo);

  return (
    <article className={propertyItemClassNameArr.join(' ')}>
      <div className={styles.propertyItemData}>
        <div className={styles.propertyItemImageWrapper}>
          {!isRequestedByUrl && propertyItem?.available && (
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
        <div className={styles.propertyItemHeadings}>
          {!isRequestedByUrl && (
            <h5 className={styles.propertyItemType}>{propertyItem?.type}</h5>
          )}
          <h3>{propertyItem?.title}</h3>
        </div>
        <div className={styles.propertyItemSpecifications}>
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
        {isRequestedByUrl && (
          <p className={styles.propertyItemAddress}>
            {`${propertyItem?.street} ${propertyItem?.street_number}, ${propertyItem?.cap} ${propertyItem?.city}`}
          </p>
        )}
        <p className={styles.propertyItemDescription}>
          {propertyItem?.description}
        </p>
      </div>
      <div className={styles.propertyItemPrice}>
        <h4>Canone d'affitto</h4>
        <p className={styles.propertyItemPriceValue}>
          <span>{`${propertyItem && CURRENCIES[propertyItem.currency]} ${
            propertyItem?.price
          } `}</span>
          /mese
        </p>
      </div>
      {isRequestedByUrl && <Button>Prenota alloggio</Button>}
    </article>
  );
};

export default PropertyItem;
