import cls from './Input.module.scss';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    onChange?: (value: string, name?: string) => void,
    placeholder?: string,
    autoFocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  Input.displayName = 'InputMemo';

  const { className, autoFocus, value, onChange, type = 'text', placeholder, readonly, ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [ isFocused, setIsFocused ] = useState(false);
  const [ caretPosition, setCaretPosition ] = useState(0);

  const isVisibleCaret = !readonly && isFocused;

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [ autoFocus ]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e.target.name);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e.target.selectionStart);
  };

  const mods: Mods = { [ cls.readonly ]: readonly };

  return (
    <div className={classNames(cls.inputWrapper, mods, [ className ])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {placeholder + '>'}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        {isVisibleCaret && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 8}px` }}
          />
        )}
      </div>
    </div>
  );
});
