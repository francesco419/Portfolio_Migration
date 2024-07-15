import { Route, Routes, HashRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
//import Notice from './components/notice/notice.jsx';
import Hidden from './pages/202305/hidden.jsx';
import TopIndicator from './pages/202305/top/toTop.jsx';
import MyHeader from './pages/202305/myHeader.jsx';

const ProjectPage = lazy(() =>
  import('./pages/202305/project/projectPage/projectPage.jsx')
);
//const Hidden = lazy(() => import('./pages/202305/hidden.jsx'));

function App() {
  return (
      <HashRouter>
        <TopIndicator/>
        <MyHeader refer={null} />
        <Suspense>
          <Routes>
            <Route path={`/project/:id`} element={<ProjectPage />} />
            <Route path={`/`} element={<Hidden />} />
          </Routes>
        </Suspense>
      </HashRouter>
  );
}

export default App;
