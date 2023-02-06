/* COMPONENTS */
import { Navbar } from "widgets/Navbar";

/* HELPERS */
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./providers/router";

/* HOOKS */
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

/* ALL STYLES */
import './styles/index.scss';


export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar/>
        <AppRouter/>
        <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}