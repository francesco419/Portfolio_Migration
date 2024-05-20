import styles from './projectPage.module.css';
import ReactMarkdown from 'react-markdown';
import { ProjectResultNew } from '../../../context/ProjectText';
import { useEffect, useState } from 'react';
import _ from 'lodash';

export default function ProjectResult({ project }) {
  const [projectResult, setProjectResult] = useState(null);
  const [projectResultNull, setProjectResultNull] = useState(null);

  useEffect(() => {
    const filteredData = _.filter(ProjectResultNew, { name: project.name });
    console.log(filteredData);
    if (filteredData.length === 0) {
      setProjectResultNull(project);
      console.log(projectResultNull);
      return;
    }
    setProjectResultNull(null);
    setProjectResult(filteredData);
    //project.param과 일치하는 project result 필터링
  }, [project]);

  if (projectResultNull)
    return (
      <div className={styles['my-project-result']}>
        <ul className={styles['my-project-skill']}>
          {projectResultNull.result.map((data, index) => {
            return (
              <li key={`results_${index}`}>
                <ReactMarkdown>{data}</ReactMarkdown>
              </li>
            );
          })}
        </ul>
      </div>
    );

  if (projectResult)
    return (
      <div className={styles['my-project-result']}>
        {projectResult[0].data.map((data, index) => {
          return (
            <ul className={styles['my-project-skill']} key={`skill_${index}`}>
              <hr />
              <h4>{data.title}</h4>
              {data.info.map((o) => {
                return (
                  <li>
                    <ReactMarkdown>{o}</ReactMarkdown>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    );
}
