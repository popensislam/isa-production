import cls from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const TextTheme = {
  PRIMARY: 'primary',
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
}

export const Text = (props: TextProps) => {
  const { className, title, text, theme = TextTheme.PRIMARY, align = 'left' } = props;
  return (
    <div className={classNames(cls.text, {}, [ cls[ theme ], className, cls[ align ] ])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
