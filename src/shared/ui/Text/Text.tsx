import cls from './Text.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error'
} as const;

type TextThemeType = typeof TextTheme[keyof typeof TextTheme]

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextThemeType
}

export const Text = ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {

  console.log(title, text);
  return (
    <div className={classNames(cls.text, {}, [ cls[ theme ], className ])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
