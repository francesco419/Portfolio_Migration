import OutBoxSkill from './outBoxSkill.jsx';
import { skillListSVG } from '@context/SKillText.jsx';

export default function SKillContainer({ forwardRef }) {
  return (
    <div ref={forwardRef}>
      <OutBoxSkill skillContents={skillListSVG} />
    </div>
  );
}
