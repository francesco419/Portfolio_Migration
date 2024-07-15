import { useState } from "react";
import styles from "./notice.module.css";
import { motion, AnimatePresence } from "framer-motion";

const NEW_DOMAIN = "https://leesanghyeon.com/";

export default function Notice() {
    const [isVisual, setIsVisual] = useState(sessionStorage.getItem("notice") ? true : false);

    const onClickHandler = () => {
        sessionStorage.setItem("notice", true);
        setIsVisual(true);
    };

    const noticeMotionVariant = {
        hidden: { top: "-100%", opacity: 0 },
        visible: {
            top: "1rem",
            opacity: 1,
            transition: { duration: 2, ease: "easeIn" },
        },
        exit: {
            top: "-100%",
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    return (
        <AnimatePresence>
            {!isVisual && (
                <motion.div
                    initial={noticeMotionVariant.hidden}
                    animate={noticeMotionVariant.visible}
                    exit={noticeMotionVariant.exit}
                    key='notice'
                    className={styles["notice"]}
                >
                    <div className={styles["notice_header"]}>
                        <h4>Notice</h4>
                        <button onClick={onClickHandler}>X</button>
                    </div>
                    <p style={{ width: "300px" }}>
                        현재 페이지 최초 입장시, 두번 로드되는 오류가 발견되어 수정중에 있습니다.
                    </p>
                    <p style={{ width: "300px", margin: "5px 0 0" }}>
                        07.16 /{" "}
                        <a
                            href='https://github.com/francesco419/Portfolio_Migration'
                            target='_blank'
                            style={{ textDecoration: "none" }}
                        >
                            ReadMe
                        </a>
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// 알림 팝업으로서 sessionStorage의 저장이름을 props로 받아 각 session에 저장된 정보에 따른 팝업 알림창으로 사용할 수도 있다.
// 재사용성 가능한 컴포넌트, data = sessionName, childComponent

{
    /* <p>혹시 사이트 주소가 netlify.app으로 끝나나요?</p>
          <a href={NEW_DOMAIN} aria-label='to New Domain'>
            여기
          </a>
          를 통해 바뀐 도메인을 통해 접속해보세요. */
}
