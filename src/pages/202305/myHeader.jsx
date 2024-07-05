import styles from './myHeader.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProjectDetailText } from '../../context/ProjectText.jsx';
import reverse from 'lodash/reverse';
import HeaderButton from '@/components/common/headerButton.jsx';

export default function MyHeader({ refer }) {
  const nav = useNavigate();

  const onClickHandler = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  if (refer === null) {
    return (
      <header className={styles['hidden-header']}>
        <HeaderButton onClick={() => nav(`/`)}>MAIN</HeaderButton>
        <HeaderButton className={styles['hidden-header-project']}>
          PROJECT
          <div className={styles['hidden-header-link']}>
            {reverse(ProjectDetailText).map((o) => {
              if (o.show === true)
                return (
                  <Link to={`/project/${o.param}`} key={o.name}>
                    {o.name}
                  </Link>
                );
            })}
          </div>
        </HeaderButton>
      </header>
    );
  } else {
    return (
      <header className={styles['hidden-header']}>
        <HeaderButton onClick={() => onClickHandler(refer.about)}>
          ABOUT
        </HeaderButton>
        <HeaderButton onClick={() => onClickHandler(refer.skill)}>
          SKILL
        </HeaderButton>
        <HeaderButton
          className={styles['hidden-header-project']}
          onClick={() => onClickHandler(refer.project)}
        >
          PROJECT
          <div className={styles['hidden-header-link']}>
            {reverse(ProjectDetailText).map((o) => {
              if (o.show === true)
                return (
                  <Link to={`/project/${o.param}`} key={o.name}>
                    {o.name}
                  </Link>
                );
            })}
          </div>
        </HeaderButton>
        <HeaderButton onClick={() => onClickHandler(refer.contact)}>
          CONTACT
        </HeaderButton>
      </header>
    );
  }
}
