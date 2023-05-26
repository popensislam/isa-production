import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';


import 'app/styles/index.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    INVERTED_CLEAR = 'invertedClear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    DISABLED = 'disabled'
}

export enum ButtonSizes {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    square?: boolean,
    size?: ButtonSizes,
    disabled?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
  Button.displayName = 'ButtonMemo';
  const {
    className,
    children,
    theme = ThemeButton.OUTLINE,
    square,
    size = ButtonSizes.M,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Mods = { [ cls.square ]: square, [ cls.disabled ]: disabled };

  const additional = [ className, cls[ theme ], cls[ size ] ];

  return (
    <button
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
});
