import styles from "./hidden.module.css";
import { useRef } from "react";
import Front from "./front/front";
import TitleWrapper from "@components/common/titleWrapper.jsx";
import ProjectContainer from "./project/projectContainer.jsx";
import AboutContainer from "./about/aboutContainer.jsx";
import SKillContainer from "../skill/skillContainer.jsx";
import FooterContact from "./contact/footer.jsx";

//const ProjectContainer = lazy(() => import('./project/projectContainer.jsx'));

const INTRO = `끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.
복잡한 문제를 쉽게 해결하는 클린코드 작성을 통해 프로덕트의 퍼포먼스를 향상시키고,
높은 사용자 경험을 제공하기 위해 차별화된 아이디어를 모색하며 다양한 UI/UX를 구현하고자 합니다.
이와 같은 노력과 목표를 바탕으로 누구나 머무르고 싶은 서비스을 만드는 개발을 하고자 합니다.`;

const FIRSTCOMMENT = `상상에 멈추지 않고 코드를 통해
현실로 만들어내는 개발자,
이상현입니다.`;

export default function Hidden() {
    return (
        <main className={styles["hidden"]}>
            <section>
                <TitleWrapper $margin $lineHeight={5.3} $size={4} $fontWeight={400}>
                    <p>{FIRSTCOMMENT}</p>
                </TitleWrapper>
                <Front />
                <TitleWrapper $margin $lineHeight={2.7} $size={1.5} $fontWeight={600}>
                    <p>{INTRO}</p>
                </TitleWrapper>
            </section>
            <section>
                <AboutContainer />
            </section>
            <section>
                <SKillContainer />
            </section>
            <section>
                <ProjectContainer />
            </section>
        </main>
    );
}
