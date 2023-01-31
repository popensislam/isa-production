import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

/* HELPERS */
import { classNames } from "../shared/lib/classNames";

/* PAGES */
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

/* HOOKS */
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

/* ALL STYLES */
import './styles/index.scss';


export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Link to={'/'}>Main page</Link>
        <Link to={'about'}>About page</Link>
        <Routes>
            <Route path={'/'} element={<MainPage />}/>
            <Route path={'/about'} element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}