import styles from './Card.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Card = (props: Props) => {
  const { children } = props;

  return <div className={styles.card}>{children}</div>;
};

export default Card;
