import styles from './projectPage.module.css';
import styled from 'styled-components';
import { skillListSVG } from '@/context/SKillText';

const ProjectSkillBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  img {
    width: 25px;
    height: 25px;
  }
`;

export default function ProjectSkill({ project }) {
  const matchSVG = (data) => {
    const matchData = skillListSVG.filter((o) => {
      return data === o.name;
    });
    if (matchData.length !== 0) {
      return matchData[0].svg;
    }
  };

  return (
    <div className={styles['my-project-stack']}>
      <h2 style={{ fontSize: '1.3rem' }}>Skill Stack</h2>
      <div className={styles['my-project-skills']}>
        {project.program.map((data, index) => {
          return (
            <ProjectSkillBox key={`skill_${index}`}>
              {matchSVG(data)}
              <p>{data}</p>
            </ProjectSkillBox>
          );
        })}
      </div>
    </div>
  );
}
