import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LandSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
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
      <button data-testid='sidebar-toggle' onClick={onToggle}>{t('pereklyuchit')}</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
        <BugButton/>
      </div>
    </div>
  );
};
