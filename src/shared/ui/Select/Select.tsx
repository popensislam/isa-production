import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export interface SelectOption<T> {
  value: T,
  content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    readonly?: boolean
    onChange?: (value: T) => void
}

export const Select = <T extends string>({ className, label, options, value, onChange, readonly }: SelectProps<T>) => {

  const optionsList = useMemo(() => {
    return options?.map((option: SelectOption<T>) => (
      <option
        value={option.value}
        key={option.value}
        className={cls.option}
      >
        {option.content}
      </option>));
  }, [ options ]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value as T);
  };

  const labelMods: Mods = { [ cls.disabled ]: readonly };

  return (
    <div className={classNames(cls.wrapper, {}, [ className ])}>
      {label && <span className={classNames(cls.label, labelMods, [])}>{label + '>'}</span>}

      <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
};
