import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes, ThemeButton } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LandSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  Sidebar.displayName = 'SidebarMemo';
  const { t } = useTranslation();
  const [ collapsed, setCollapsed ] = useState(false);

  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const itemList = useMemo(() => {
    return sidebarItemList.map((item) => {
      return <SidebarItem key={item.path} to={item.path} className={cls.linkItem} Icon={item.Icon}>{t(item.text)}</SidebarItem>;
    });
  }, [ sidebarItemList, t ]);

  return (
    <div data-testid='sidebar' className={classNames(cls.Sidebar, { [ cls.collapsed ]: collapsed }, [ className ])}>
      <Button data-testid='sidebar-toggle' theme={ThemeButton.BACKGROUND_INVERTED} square={true} size={ButtonSizes.XL} className={cls.collapsedBtn} onClick={onToggle}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.items}>
        {itemList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang} short={collapsed}/>
        <BugButton/>
      </div>
    </div>
  );
});
