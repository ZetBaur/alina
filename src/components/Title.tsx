import styles from './Title.module.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface Props {
  title: string;
  feature: string;
}

function Title({ title, feature }: Props) {
  return (
    <div className={styles.title}>
      <span>{title}</span>

      <div className={styles.featureWrapper}>
        <span className={styles.feature}>{feature}</span>
        <AiOutlineCheckCircle size={25} />
      </div>
    </div>
  );
}

export default Title;
