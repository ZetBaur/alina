import styles from './Widget.module.scss';
import { AiOutlineBell } from 'react-icons/ai';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function Widget() {
  return (
    <div className={styles.widget}>
      <AiOutlineBell size={25} color='#183e7e' className={styles.bell} />
      <Avatar size='large' className={styles.avatar} icon={<UserOutlined />} />
      <span className={styles.userName}>Иванов И.И.</span>
    </div>
  );
}

export default Widget;
