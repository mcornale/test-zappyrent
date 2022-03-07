import styles from './Section.module.css';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Section = (props: Props) => {
  const { children } = props;

  return <section className={styles.section}>{children}</section>;
};

export default Section;
