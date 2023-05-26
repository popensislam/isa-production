import cls from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

export interface SelectOption {
  value: string,
  content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {

  const optionsList = useMemo(() => {
    return options?.map((option: SelectOption) => (
      <option
        value={option.value}
        key={option.value}
        className={cls.option}
      >
        {option.content}
      </option>));
  }, [ options ]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value);
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
});
