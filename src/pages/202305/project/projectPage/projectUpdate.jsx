import styles from './projectPage.module.css';
import { newDate } from '@function/newDate.jsx';
import Git from '@assets/svg/project/github.svg?react';
import Url from '@assets/svg/project/url.svg?react';

export default function ProjectUpdate({ git, project }) {
  return (
    <div className={styles['my-project-update']}>
      <p>{`Last Update : ${newDate(git.pushed_at)}`}</p>
      <p>|</p>
      <p>{`Created : ${newDate(git.created_at)}`}</p>
      <div className={styles['my-project-link']}>
        <a href={project.github} aria-label='to github page'>
          <Git />
        </a>
        {project.url && (
          <a href={project.url} aria-label='to published page'>
            <Url />
          </a>
        )}
      </div>
    </div>
  );
}
