import styles from './Card.module.css';

type Props = {
  children: JSX.Element[] | JSX.Element;
  className: string;
};

const Card = (props: Props) => {
  const { children, className } = props;

  const cardClassNameArr = [styles.card];
  if (className) cardClassNameArr.push(className);

  return <div className={cardClassNameArr.join(' ')}>{children}</div>;
};

export default Card;
