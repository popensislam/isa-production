import cls from './Icon.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

interface IconProps {
  className?: string
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon = (props: IconProps) => {
  const { Svg, className } = props;
  return <Svg className={classNames(cls.icon, {}, [ className ])} />;
};
