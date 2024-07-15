import { useEffect, useState, lazy, Suspense } from "react";
import styles from "./projectPage.module.css";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import ImageButton from "./button/imageButton";

const LazyImageZoom = lazy(() => import("./imageZoom.jsx"));

export default function ProjectImage({ project }) {
    const [slideCount, setSlideCount] = useState(0);
    const [zoomImage, setZoomImage] = useState(false);

    useEffect(() => {
        setSlideCount((slideCount) => 0);
    }, [project]);

    const buttonClick = (bool) => {
        if (bool && slideCount > -project.img.length + 1)
            setSlideCount((slideCount) => slideCount - 1);

        if (!bool && slideCount < 0) setSlideCount((slideCount) => slideCount + 1);
    };

    const changeZoomImage = () => {
        setZoomImage((zoomImage) => !zoomImage);
    };

    return (
        <div className={styles["my-project-image"]}>
            <Suspense>
                {zoomImage && (
                    <LazyImageZoom
                        slideCount={slideCount}
                        buttonClick={buttonClick}
                        image={project.img}
                        changeZoom={changeZoomImage}
                    />
                )}
            </Suspense>
            <ImageButton $left={true} onClick={() => buttonClick(false)}>
                <img src={left} alt='image to left' />
            </ImageButton>
            <div
                className={styles["my-project-img"]}
                style={{ transform: `translateX(${slideCount * 100}%)` }}
                onClick={changeZoomImage}
            >
                {project.img.map((data, index) => {
                    return <img src={data} key={`img_${index}`} alt={`projectImg_${index}`} />;
                })}
            </div>
            <ImageButton $left={false} onClick={() => buttonClick(true)}>
                <img src={right} alt='image to right' />
            </ImageButton>
        </div>
    );
}
