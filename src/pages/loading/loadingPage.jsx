import styles from "./loadingPage.module.css";
import { motion } from "framer-motion";

export default function LoadingPage() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles["loading"]}
        >
            <span className={styles["loaderOut"]}>
                <span className={styles["loader"]}></span>
            </span>
        </motion.div>
    );
}
