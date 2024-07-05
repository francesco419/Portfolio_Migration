import { Link } from 'react-router-dom';
import styles from './project.module.css';
import open from '@assets/svg/open.svg';

export default function Project({ projects, num }) {
  return (
    <div className={styles['hidden-project-index']}>
      <picture>
        <source type='image/webp' srcset={projects.img} loading='lazy' />
        <img src={projects.img} loading='lazy' />
      </picture>
      <div className={`${styles['hidden-project-front']} ${styles['topleft']}`}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between'
          }}
        >
          <p>{projects.name}</p>
          <img src={open} alt='open' loading='lazy' />
        </div>
        <p>{projects.text}</p>
        <Link to={`/project/${projects.to}`} className={styles['topleft']} />
      </div>
    </div>
  );
}
