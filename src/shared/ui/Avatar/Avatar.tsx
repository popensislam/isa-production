import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar = ({ className, src, alt, size }: AvatarProps) => {

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100
  }), [ size ]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, {}, [ className ])}
    />
  );
};
