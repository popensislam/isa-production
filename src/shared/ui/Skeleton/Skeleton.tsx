import cls from './Skeleton.module.scss';
import { CSSProperties } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface SkeletonProps {
  className?: string
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = (props: SkeletonProps) => {

  const { width, height, border, className } = props;

  const styles: CSSProperties = { width, height, borderRadius: border };

  return <div className={classNames(cls.skeleton, {}, [ className ])} style={styles}/>;
};
