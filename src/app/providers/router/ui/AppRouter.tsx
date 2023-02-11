import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) =>
            <Route key={path} path={path} element={element}/>
          )}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
