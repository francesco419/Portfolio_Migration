import { MiddleTitle } from '@/components/midTitle';
import styles from './personal.module.css';

export default function Personal({ forwardRef }) {
  return (
    <div ref={forwardRef} className={styles['personal']}>
      <MiddleTitle title={`Personal`} />
      <tr>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
      </tr>
    </div>
  );
}
