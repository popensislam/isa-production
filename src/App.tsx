import { Suspense, useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./components/Counter";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import './styles/index.scss';
import { useTheme } from "./theme/useTheme";



export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Link to={'/'}>Main page</Link>
        <Link to={'about'}>About page</Link>
        <Routes>
            <Route path={'/'} element={<MainPageAsync />}/>
            <Route path={'/about'} element={<AboutPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  )
}