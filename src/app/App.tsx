/* COMPONENTS */
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

/* HELPERS */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Suspense } from 'react';

export function App() {

  return (
    <div className={classNames('app', {}, [ ])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
}
