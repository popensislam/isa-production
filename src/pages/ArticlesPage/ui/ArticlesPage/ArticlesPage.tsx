import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesList } from 'pages/ArticlesPage/model/services/fetchNextArticlesList/fetchNextArticlesList';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';

const reducers: ReducerList = { articlesPage: articlesPageReducer };

const ArticlesPage = () => {

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);

  const isLoading = useSelector(getArticlesPageIsLoading);

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesList());
    }
  }, [ dispatch ]);

  const onChangeView = useCallback((viewElm) => {
    dispatch(articlesPageActions.setView(viewElm));
  }, [ dispatch ]);

  useInitEffect(() => {
    dispatch(initArticlesPage());
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <div>
          <ArticleViewSelector view={view} onViewClick={onChangeView}/>
          <ArticleList isLoading={isLoading} view={view} articles={articles}/>
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
