import styles from './myHeader.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProjectDetailText } from '@context/ProjectText.jsx';
import reverse from 'lodash/reverse';
import HeaderButton from '@components/common/headerButton.jsx';
import LinkRouter from '@components/common/linkRouter';

export default function MyHeader({ refer }) {

  const onClickHandler = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  if (refer === null) {
    return (
      <nav className={styles['header']}>
        <ul>
          <li>
        <LinkRouter to={`/`}>MAIN</LinkRouter>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={styles['header']}>
        <ul>
          <li>
        <HeaderButton onClick={() => onClickHandler(refer.about)}>
          ABOUT
        </HeaderButton>
          </li>
          <li>
        <HeaderButton onClick={() => onClickHandler(refer.skill)}>
          SKILL
        </HeaderButton>
          </li>
          <li>
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
          </li>
          <li>
        <HeaderButton onClick={() => onClickHandler(refer.contact)}>
          CONTACT
        </HeaderButton>
          </li>
        </ul>
      </nav>
    );
  }
}
