import OutBoxSkill from './outBoxSkill.jsx';
import { skillListSVG } from '../../context/SKillText.jsx';
import shuffle from 'lodash/shuffle';

export default function SKillContainer({ forwardRef }) {
  return (
    <div ref={forwardRef}>
      <OutBoxSkill skillContents={shuffle(skillListSVG)} />
    </div>
  );
}
