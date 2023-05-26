import cls from './CurrencySelect.module.scss';
import { Currency } from 'entities/Currency';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import type { CurrencyType } from 'entities/Currency';

interface CurrencySelectProps {
    className?: string
    value?: CurrencyType
    readonly?: boolean
    onChange?: (value: CurrencyType) => void
}


export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {

  const { t } = useTranslation();

  const currencyOptions = useMemo(() => ([
    { value: Currency.EUR, content: Currency.EUR }, { value: Currency.RUB, content: Currency.RUB }, { value: Currency.USD, content: Currency.USD },
  ]), []);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CurrencyType);
  }, []);

  return (
    <Select
      label={t('select-currency')}
      options={currencyOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
