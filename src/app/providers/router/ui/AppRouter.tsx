import { getUserAuthData } from 'entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => {

  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    });
  }, [ isAuth ]);

  return (
    <Suspense fallback={<PageLoader/>}>
      <div className="page-wrapper">
        <Routes>
          {routes.map(({ path, element }) =>
            <Route key={path} path={path} element={element}/>
          )}
        </Routes>
      </div>
    </Suspense>
  );
};

export default memo(AppRouter);
