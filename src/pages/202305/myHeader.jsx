import styles from './myHeader.module.css';
import { Link, useLocation } from 'react-router-dom';
import { ProjectDetailText } from '@context/ProjectText.jsx';
import HeaderButton from '@components/common/headerButton.jsx';
import LinkRouter from '@components/common/linkRouter.jsx';

const ABOUT_OFFSETTOP = 1291;
const SKILL_OFFSETTOP = 2079;
const PROJECT_OFFSETTOP = 3421;

export default function MyHeader() {
  const onClickHandler = (ref) => {
    window.scrollTo(0, ref);
  };

  const loc = useLocation();
  console.log(loc.pathname === '/');

  return (
    <nav className={styles['header']}>
      <ul className={styles['header-ul']}>
        {loc.pathname === '/' ? (
          <>
            <li>
              <HeaderButton onClick={() => onClickHandler(ABOUT_OFFSETTOP)}>
                ABOUT
              </HeaderButton>
            </li>
            <li>
              <HeaderButton onClick={() => onClickHandler(SKILL_OFFSETTOP)}>
                SKILL
              </HeaderButton>
            </li>
          </>
        ) : (
          <li>
            <LinkRouter to={`/`}>MAIN</LinkRouter>
          </li>
        )}
        <li>
          <HeaderButton
            className={styles['hidden-header-project']}
            onClick={() => onClickHandler(PROJECT_OFFSETTOP)}
          >
            PROJECT
            <ul className={styles['hidden-header-link']}>
              {ProjectDetailText.map((o, index) => {
                if (o.show === true)
                  return (
                    <li key={`header_project_${index}`}>
                      <Link to={`/project/${o.param}`} key={o.name}>
                        {o.name}
                      </Link>
                    </li>
                  );
              })}
            </ul>
          </HeaderButton>
        </li>
      </ul>
    </nav>
  );
}
