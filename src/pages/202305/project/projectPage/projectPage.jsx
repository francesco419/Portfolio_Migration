import { useEffect, useState } from "react";
import styles from "./projectPage.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProjectDetailText } from "@context/ProjectText.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "@redux/project.js";
import ProjectImage from "./projectImage.jsx";
import ProjectSkill from "./projectSkill.jsx";
import ProjectUpdate from "./projectUpdate.jsx";
import ProjectResult from "./projectResult.jsx";
import ProjectNext from "./projectNext.jsx";
import LoadingPage from "@/pages/loading/loadingPage.jsx";

export default function ProjectPage() {
    const param = useParams();
    const dispatch = useDispatch();
    const projectRedux = useSelector((state) => state.project.value);
    const [gitRepo, setGitRepo] = useState();
    const [loading, setLoading] = useState(true);
    const projectText = ProjectDetailText.filter((data) => data.param === param.id);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (param.id) {
            dispatch(setProject(param.id));
            getGithub(param.id);
        } else {
            getGithub(projectRedux);
        }
        //window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [param]);

    const getGithub = async (title) => {
        try {
            const response = await axios.get("https://api.github.com/users/francesco419/repos");
            const repo = response.data.filter((data) => {
                return data.name === title;
            });
            dispatch(setProject(title));
            setGitRepo((gitRepo) => repo);
            setLoading((loading) => false);
        } catch {
            console.log("fetching error");
        }
    };

    if (loading) {
        return <LoadingPage />;
    } else {
        return (
            <div className={styles["my-container"]}>
                <div className={styles["my-project"]}>
                    <p
                        className={styles["my-project-title"]}
                    >{`Project ${projectText[0].id} : ${projectText[0].name}`}</p>
                    <ProjectUpdate git={gitRepo[0]} project={projectText[0]} />
                    <div className={styles["my-project-intro"]}>
                        <p>{projectText[0].text2}</p>
                    </div>
                    <ProjectSkill project={projectText[0]} />
                    <ProjectImage project={projectText[0]} />
                    <ProjectResult project={projectText[0]} />
                    <ProjectNext project={projectText[0]} />
                </div>
            </div>
        );
    }
}
