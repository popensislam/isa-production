import cls from './AppLink.module.scss';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import type { LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  AppLink.displayName = 'AppLinkMemo';
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [ className, cls[ theme ] ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
