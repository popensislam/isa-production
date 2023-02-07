/* COMPONENTS */
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

/* HELPERS */
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { Suspense } from "react";

/* HOOKS */
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

/* ALL STYLES */
import './styles/index.scss';
import { useTranslation } from "react-i18next";

const Component = () => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      <button onClick={toggle}>{t('Перевод')}</button>
      {t('Тестовый перевод')}
      </div>
  )
}


export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <Component/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}