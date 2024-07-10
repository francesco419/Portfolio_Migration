import { Route, Routes, HashRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
//import Notice from './components/notice/notice.jsx';
//import Hidden from './pages/202305/hidden.jsx';

const ProjectPage = lazy(() =>
  import('./pages/202305/project/projectPage/projectPage.jsx')
);
const Hidden = lazy(() => import('./pages/202305/hidden.jsx'));

function App() {
  return (
    <>
      {/* <Notice /> */}
      <HashRouter>
        <Suspense>
          <Routes>
            <Route path={`/project/:id`} element={<ProjectPage />} />
            <Route path={`/`} element={<Hidden />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
