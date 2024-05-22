import { Link } from 'react-router-dom';
import styles from './project.module.css';
import Open from '../../../assets/svg/open.svg?react';

export default function Project({ projects, num }) {
  return (
    <div className={styles['hidden-project-index']}>
      <img src={projects.img} />
      <div className={`${styles['hidden-project-front']} ${styles['topleft']}`}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between'
          }}
        >
          <p>{projects.name}</p>
          <Open />
        </div>
        <p>{projects.text}</p>
        <Link to={`/project/${projects.to}`} className={styles['topleft']} />
      </div>
    </div>
  );
}
