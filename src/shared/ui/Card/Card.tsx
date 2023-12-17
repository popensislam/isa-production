import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children, ...restProps }: CardProps) => {
  return <div className={classNames(cls.Card, {}, [ className ])} {...restProps}>{children}</div>;
};
