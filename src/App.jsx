import { Route, Routes, HashRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import TopIndicator from "./pages/202305/top/toTop.jsx";
import MyHeader from "./pages/202305/myHeader.jsx";
import FooterContact from "./pages/202305/contact/footer.jsx";
import LoadingPage from "./pages/loading/loadingPage.jsx";

const ProjectPage = lazy(() => import("./pages/202305/project/projectPage/projectPage.jsx"));
const Hidden = lazy(() => import("./pages/202305/hidden.jsx"));

function App() {
    return (
        <HashRouter>
            <TopIndicator />
            <MyHeader />
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path={`/project/:id`} element={<ProjectPage />} />
                    <Route path={`/`} element={<Hidden />} />
                </Routes>
            </Suspense>
            <FooterContact />
        </HashRouter>
    );
}

export default App;
