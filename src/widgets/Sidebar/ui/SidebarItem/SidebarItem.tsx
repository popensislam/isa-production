import cls from './SidebarItem.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { FC, FunctionComponent, memo, SVGAttributes } from 'react';

interface SidebarItemProps {
    className?: string
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    to: string
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ className, children, Icon, to }) => {
  SidebarItem.displayName = 'SidebarItemMemo';
  return (
    <AppLink to={to} theme={AppLinkTheme.PRIMARY} className={cls.link}>
      <Icon className={cls.icon}/>
      <span className={className}>{children}</span>
    </AppLink>
  );
});
