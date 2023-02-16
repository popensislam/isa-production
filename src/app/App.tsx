/* COMPONENTS */
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

/* HELPERS */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Suspense, useEffect } from 'react';

/* HOOKS */
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

/* ALL STYLES */
import 'app/styles/index.scss';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LandSwitcher';


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
