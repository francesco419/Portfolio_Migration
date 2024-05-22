import styles from './skills.module.css';
import SkillBox from './skillNew';
import _ from 'lodash';
import { useState } from 'react';
import { MiddleTitle } from '../../components/midTitle';

export default function OutBoxSkill({ skillContents }) {
  const [node, setNode] = useState(null);

  const nodeHandler = (nodeName) => {
    setNode((node) => nodeName);
  };

  return (
    <div className={styles['skill_section']}>
      <MiddleTitle title={'SKILL'} />
      <div className={styles['skill_cardBox']}>
        {_.map(skillContents, (o, index) => {
          return (
            <SkillBox
              name={o.name}
              svg={o.svg}
              index={index + 1}
              key={o.name}
              handler={nodeHandler}
              node={node}
            />
          );
        })}
      </div>
    </div>
  );
}
