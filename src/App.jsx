import { Route, Routes, HashRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Notice from './components/notice/notice';

const ProjectPage = lazy(() =>
  import('./pages/202305/project/projectPage/projectPage')
);
const Hidden = lazy(() => import('./pages/202305/hidden'));

function App() {
  return (
    <>
      <Notice />
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
