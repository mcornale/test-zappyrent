import styles from './Error.module.css';

type Props = {
  error: string;
};

const Error = (props: Props) => {
  const { error } = props;

  return <p className={styles.error}>{error}</p>;
};

export default Error;
