import { Route, Routes, HashRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const ProjectPage = lazy(() => import('./pages/202305/project/projectPage'));
const Hidden = lazy(() => import('./pages/202305/hidden'));

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={`/project/:id`}
          element={
            <Suspense>
              <ProjectPage />
            </Suspense>
          }
        />

        <Route
          path={`/`}
          element={
            <Suspense>
              <Hidden />
            </Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
