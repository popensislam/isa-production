import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';


export const fetchNextArticlesList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesList',
  async (_, { getState, dispatch }) => {

    const isLoading = getArticlesPageIsLoading(getState());
    const page = getArticlesPageNumber(getState());
    const hasMore = getArticlesPageHasMore(getState());

    if (!hasMore) return;
    if (isLoading) return;
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList());
  }
);
