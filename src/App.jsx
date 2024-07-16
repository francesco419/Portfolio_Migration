import { Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import TopIndicator from "./pages/202305/top/toTop.jsx";
import MyHeader from "./pages/202305/myHeader.jsx";
import FooterContact from "./pages/202305/contact/footer.jsx";
//import LoadingPage from "./pages/loading/loadingPage.jsx";
//import Notice from "./components/notice/notice.jsx";

import ProjectPage from "./pages/202305/project/projectPage/projectPage.jsx";
import Hidden from "./pages/202305/hidden.jsx";

//const ProjectPage = lazy(() => import("./pages/202305/project/projectPage/projectPage.jsx"));
//const Hidden = lazy(() => import("./pages/202305/hidden.jsx"));

function App() {
    return (
        <HashRouter>
            {/* <Notice /> */}
            <TopIndicator />
            <MyHeader />
            {/*             <Suspense fallback={<LoadingPage />}> */}
            <Routes>
                <Route path={`/project/:id`} element={<ProjectPage />} />
                <Route path={`/`} element={<Hidden />} />
            </Routes>
            {/* </Suspense> */}
            <FooterContact />
        </HashRouter>
    );
}

export default App;
