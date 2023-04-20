import cls from './Input.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
    placeholder?: string,
    autoFocus?: boolean
}

export const Input = memo(({ className, autoFocus, value, onChange, type = 'text', placeholder, ...otherProps }: InputProps) => {
  Input.displayName = 'InputMemo';
  const inputRef = useRef<HTMLInputElement>(null);
  const [ isFocused, setIsFocused ] = useState(false);
  const [ caretPosition, setCaretPosition ] = useState(0);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [ autoFocus ]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
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

  return (
    <div className={classNames(cls.inputWrapper, {}, [ className ])}>
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
          {...otherProps}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 8}px` }}
          />
        )}
      </div>
    </div>
  );
});
