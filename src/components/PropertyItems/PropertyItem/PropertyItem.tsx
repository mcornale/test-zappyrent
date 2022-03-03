import { CURRENCIES } from '../../../costants/currencies';
import Card from '../../Card/Card';
import styles from './PropertyItem.module.css';

type Props = {
  available: boolean;
  baths: number;
  beds: number;
  cap: string;
  city: string;
  currency: string;
  description: string;
  floor: number;
  id: number;
  images: { url: string }[];
  price: number;
  province: string;
  street: string;
  street_number: string;
  tenants: number;
  title: string;
  type: string;
};

const PropertyItem = (props: Props) => {
  const {
    available,
    baths,
    beds,
    cap,
    city,
    currency,
    description,
    floor,
    id,
    images,
    price,
    province,
    street,
    street_number: streetNumber,
    tenants,
    title,
    type,
  } = props;

  return (
    <Card>
      <div className={styles.propertyItemImageWrapper}>
        {available && (
          <p className={styles.propertyItemAvailableBanner}>
            Disponibile subito
          </p>
        )}
        <img className={styles.propertyItemImage} src={images[0].url} alt='' />
      </div>
      <div className={styles.propertyItemData}>
        <h5 className={styles.propertyItemType}>{type}</h5>
        <h3>{title}</h3>
        <div className={styles.propertyItemDetails}>
          <p>
            <span>{tenants}</span> inquilini
          </p>
          <p>
            <span>{baths}</span> bagno
          </p>
          <p>
            <span>{beds}</span> letti
          </p>
        </div>
        <p className={styles.propertyItemDescription}>{description}</p>
      </div>
      <div className={styles.propertyItemPrice}>
        <h4>Canone d'affitto</h4>
        <p className={styles.propertyItemPriceValue}>
          <span>{`${CURRENCIES[currency]} ${price}`}</span> /mese
        </p>
      </div>
    </Card>
  );
};

export default PropertyItem;
