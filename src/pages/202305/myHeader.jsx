import styles from "./myHeader.module.css";
import { Link, useLocation } from "react-router-dom";
import { ProjectDetailText } from "@context/ProjectText.jsx";
import reverse from "lodash/reverse.js";
import HeaderButton from "@components/common/headerButton.jsx";
import LinkRouter from "@components/common/linkRouter.jsx";

const ABOUT_OFFSETTOP = 1291;
const SKILL_OFFSETTOP = 2079;
const PROJECT_OFFSETTOP = 3421;

export default function MyHeader() {
    const onClickHandler = (ref) => {
        window.scrollTo(0, ref);
    };

    const loc = useLocation();
    console.log(loc.pathname === "/");

    return (
        <nav className={styles["header"]}>
            <ul className={styles["header-ul"]}>
                {loc.pathname === "/" ? (
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
                        className={styles["hidden-header-project"]}
                        onClick={() => onClickHandler(PROJECT_OFFSETTOP)}
                    >
                        PROJECT
                        <ul className={styles["hidden-header-link"]}>
                            {reverse(ProjectDetailText).map((o) => {
                                if (o.show === true)
                                    return (
                                        <li>
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

    /* if (refer === null) {
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
  } */
}
