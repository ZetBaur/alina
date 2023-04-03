import styles from './Widget.module.scss';
import { AiOutlineBell } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';

function Widget() {
  return (
    <div className={styles.widget}>
      <AiOutlineBell size={25} color='#183e7e' className={styles.bell} />

      <Avatar alt='Remy Sharp' className={styles.avatar} />
      <span className={styles.userName}>Иванов И.И.</span>
    </div>
  );
}

export default Widget;
