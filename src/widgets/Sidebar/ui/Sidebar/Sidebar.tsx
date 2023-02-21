import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSizes, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LandSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {

  const { t } = useTranslation();
  const [ collapsed, setCollapsed ] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(cls.Sidebar, { [ cls.collapsed ]: collapsed }, [ className ])}>
      <Button data-testid='sidebar-toggle' theme={ThemeButton.BACKGROUND_INVERTED} square={true} size={ButtonSizes.XL} className={cls.collapsedBtn} onClick={onToggle}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.items}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.PRIMARY} className={cls.link}>
          <MainIcon className={cls.icon}/>
          {!collapsed && t('main')}
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.PRIMARY} className={cls.link}>
          <AboutIcon className={cls.icon}/>
          {!collapsed && t('about')}
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang} short={collapsed}/>
        <BugButton/>
      </div>
    </div>
  );
};
