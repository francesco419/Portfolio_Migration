import styles from './projectPage.module.css';
import ReactMarkdown from 'react-markdown';
import { ProjectResultNew } from '../../../../context/ProjectText';
import { useEffect, useRef, useState } from 'react';
import filter from 'lodash/filter';
import ListContainer from './comp/listContainer';

export default function ProjectResult({ project }) {
  const [projectResult, setProjectResult] = useState(null);
  const [projectResultNull, setProjectResultNull] = useState(null);

  useEffect(() => {
    const filteredData = filter(ProjectResultNew, { name: project.name });
    if (filteredData.length === 0) {
      setProjectResultNull(project);
      return;
    }
    setProjectResultNull(null);
    setProjectResult(filteredData);
    //project.param과 일치하는 project result 필터링
  }, [project]);

  const linkTag = (link) => {
    return (
      <a href={link} target=''>
        작업일지
      </a>
    );
  };

  if (projectResultNull)
    return (
      <div className={styles['my-project-result']}>
        <ul className={styles['my-project-ul']}>
          {projectResultNull.result.map((data, index) => {
            return (
              <li className={styles['my-project-li']} key={`results_${index}`}>
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
          const ren = data.title === '과정 & 문제해결';
          return (
            <ul
              className={styles['my-project-ul']}
              key={`skill_${index}`}
              style={{ padding: ren ? '20px' : null }}
            >
              <hr />
              <h4 style={{ padding: ren ? '20px' : null }}>
                {data.title}
                {projectResult[0].work.map((o, index) => {
                  if (ren)
                    return (
                      <a
                        href={o}
                        target='_blank'
                        style={{
                          margin: '0 0 0 20px',
                          textDecoration: 'underline',
                          color: 'blue'
                        }}
                      >
                        작업일지{index + 1}
                      </a>
                    );
                })}
              </h4>
              {data.info.map((obj) => {
                if (ren) return <ListContainer data={obj} />;
                else {
                  return (
                    <li className={styles['my-project-li']}>
                      <ReactMarkdown>{obj}</ReactMarkdown>
                    </li>
                  );
                }
              })}
            </ul>
          );
        })}
      </div>
    );
}

/**component분리  {isClick && <ReactMarkdown>{o}</ReactMarkdown>
 * <div className={styles['my-project-result']}>
        {projectResult[0].data.map((data, index) => {
          const ren = data.title === '과정 & 문제해결';
          return (
            <ul
              className={styles['my-project-skill']}
              key={`skill_${index}`}
              style={{ padding: ren ? '20px' : null }}
            >
              <hr />
              <h4 style={{ padding: ren ? '20px' : null }}>
                {data.title}(dropdown)
              </h4>
              {data.info.map((o) => {
                if (ren)
                  return (
                    <li
                      style={{
                        display: 'flex'
                      }}
                    >
                      <button
                        style={{
                          float: 'left',
                          background: 'none',
                          height: '32px',
                          width: '32px',
                          border: '0',
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          setIsClick((isClick) => !isClick);
                        }}
                      >
                        ▶
                      </button>
                      <ReactMarkdown>{o}</ReactMarkdown>
                      {isClick && <ReactMarkdown>{o}</ReactMarkdown>}
                    </li>
                  );
                else {
                  return (
                    <li>
                      <ReactMarkdown>{o}</ReactMarkdown>
                    </li>
                  );
                }
              })}
            </ul>
          );
        })}
      </div>
 * 
 * }*/
