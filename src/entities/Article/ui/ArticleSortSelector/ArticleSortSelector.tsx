import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
    className?: string
    sort?: ArticleSortField
    order?: SortOrder
    onChangeSort: (sort: ArticleSortField) => void
    onChangeOrder: (order: SortOrder) => void
}

export const ArticleSortSelector = memo(({ className, sort, order, onChangeOrder, onChangeSort }: ArticleSortSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => {
    return [
      {
        value: 'asc',
        content: t('up')
      }, {
        value: 'desc',
        content: t('down')
      },
    ];
  }, [ t ]);

  const sortFeldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => {
    return [
      {
        value: ArticleSortField.CREATED,
        content: t('createdAt')
      }, {
        value: ArticleSortField.TITLE,
        content: t('articleTitle')
      }, {
        value: ArticleSortField.VIEWS,
        content: t('views')
      },
    ];
  }, [ t ]);

  return (
    <div className={cls.articleSortSelector}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFeldOptions}
        label={t('sort by')}
      />
      <Select
        value={order}
        onChange={(value) => onChangeOrder(value as SortOrder)}
        options={orderOptions}
        label={t('by')}
      />
    </div>
  );
});
