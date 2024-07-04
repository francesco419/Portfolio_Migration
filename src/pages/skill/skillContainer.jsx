import OutBoxSkill from './outBoxSkill';
import { skillListSVG } from '../../context/SKillText';
import shuffle from 'lodash/shuffle';

export default function SKillContainer({ forwardRef }) {
  return (
    <div ref={forwardRef}>
      <OutBoxSkill skillContents={shuffle(skillListSVG)} />
    </div>
  );
}
