import cls from './ArticlePageFilters.module.scss';
import { ArticleViewSelector } from 'entities/Article';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [ dispatch ]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((viewElm) => {
    dispatch(articlesPageActions.setView(viewElm));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [ dispatch, fetchData ]);

  const onChangeOrder = useCallback((order) => {
    dispatch(articlesPageActions.setOrder(order));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [ dispatch, fetchData ]);

  const onChangeSort = useCallback((sort) => {
    dispatch(articlesPageActions.setSort(sort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [ dispatch, fetchData ]);

  const onChangeSearch = useCallback((search) => {
    dispatch(articlesPageActions.setSearch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData();
  }, [ dispatch, debouncedFetchData ]);

  const onChangeType = useCallback((tab: TabItem<ArticleType>) => {
    dispatch(articlesPageActions.setType(tab.value as ArticleType));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [ dispatch, fetchData ]);

  const typeTabs = useMemo<TabItem<ArticleType>[]>(() => {
    return [
      {
        value: ArticleType.ALL,
        content: t('All')
      }, {
        value: ArticleType.IT,
        content: t('IT')
      }, {
        value: ArticleType.ECONOMICS,
        content: t('Econimics')
      }, {
        value: ArticleType.SCIENCE,
        content: t('Science')
      },
    ];
  }, [ t ]);

  return (
    <div>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort}/>
        <ArticleViewSelector view={view} onViewClick={onChangeView}/>
      </div>
      <Card className={cls.search}>
        <Input value={search} onChange={onChangeSearch} placeholder={t('search')}/>
      </Card>
      <Tabs className={cls.tabs} tabs={typeTabs} value={type} onTabClick={onChangeType}/>
    </div>
  );
};
