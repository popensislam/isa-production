import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country, CountryType } from 'entities/Country/model/types/Country';

interface CountrySelectProps {
    className?: string
    value?: CountryType
    readonly?: boolean
    onChange?: (value: CountryType) => void
}


export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {

  const { t } = useTranslation();

  const countryOptions = useMemo(() => (
    [
      { value: Country.Armenia, content: Country.Armenia }, { value: Country.Belarus, content: Country.Belarus }, { value: Country.Kyrgyztan, content: Country.Kyrgyztan }, { value: Country.Russia, content: Country.Russia }, { value: Country.Ukraine, content: Country.Ukraine },
    ]
  ), []);

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CountryType);
  }, []);

  return (
    <Select
      label={t('select-country')}
      options={countryOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
