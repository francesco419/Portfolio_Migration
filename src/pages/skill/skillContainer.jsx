import OutBoxSkill from './outBoxSkill';
import { skillListSVG } from '../../context/SKillText';
import _ from 'lodash';

export default function SKillContainer({ forwardRef }) {
  return (
    <div ref={forwardRef}>
      <OutBoxSkill skillContents={_.shuffle(skillListSVG)} />
    </div>
  );
}
