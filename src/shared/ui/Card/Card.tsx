import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
}

export const Card = ({ className, children, theme = CardTheme.NORMAL, ...restProps }: CardProps) => {
  return <div className={classNames(cls.Card, {}, [ className, cls[ theme ] ])} {...restProps}>{children}</div>;
};
