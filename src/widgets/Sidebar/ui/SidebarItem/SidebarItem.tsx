import cls from './SidebarItem.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { FC, FunctionComponent, memo, SVGAttributes } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
    className?: string
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    to: string
    authOnly?: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ className, children, Icon, to, authOnly }) => {
  SidebarItem.displayName = 'SidebarItemMemo';

  const isAuth = useSelector(getUserAuthData);

  if (authOnly && !isAuth) {
    return <></>;
  }

  return (
    <AppLink to={to} theme={AppLinkTheme.PRIMARY} className={cls.link}>
      <Icon className={cls.icon}/>
      <span className={className}>{children}</span>
    </AppLink>
  );
});
