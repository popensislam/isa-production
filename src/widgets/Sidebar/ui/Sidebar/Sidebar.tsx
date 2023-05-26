import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LandSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import type { SidebarItemI } from 'widgets/Sidebar/model/items';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  Sidebar.displayName = 'SidebarMemo';
  const { t } = useTranslation();
  const [ collapsed, setCollapsed ] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid='sidebar' className={classNames(cls.Sidebar, { [ cls.collapsed ]: collapsed }, [ className ])}>
      <Button data-testid='sidebar-toggle' theme={ThemeButton.BACKGROUND_INVERTED} square={true} size={ButtonSizes.XL} className={cls.collapsedBtn} onClick={onToggle}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item: SidebarItemI) => (
          <SidebarItem key={item.path} to={item.path} authOnly={item.authOnly} className={cls.linkItem} Icon={item.Icon}>{t(item.text)}</SidebarItem>
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang} short={collapsed}/>
        <BugButton/>
      </div>
    </div>
  );
});
