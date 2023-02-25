/* COMPONENTS */
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

/* HELPERS */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Suspense, useState } from 'react';

/* HOOKS */
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

/* ALL STYLES */
import { Modal } from 'shared/ui/Modal/Modal';

export function App() {
  const { theme } = useTheme();


  return (
    <div className={classNames('app', {}, [ theme ])}>
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
