import cls from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const TextTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ERROR: 'error'
} as const;

type TextThemeType = typeof TextTheme[keyof typeof TextTheme]

type TextAlignType = 'center' | 'right' | 'left'

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextThemeType
    align?: TextAlignType
    size?: TextSize
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

export const Text = (props: TextProps) => {
  const { className, title, size = TextSize.M, text, theme = TextTheme.SECONDARY, align = 'left' } = props;


  return (
    <div className={classNames(cls.text, {}, [ cls[ theme ], className, cls[ align ], cls[ size ] ])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
