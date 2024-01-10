import { getArticlesPageLimit, getArticlesPageNumber, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType } from '../../selectors/articlesPageSelectors';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export const fetchArticlesList = createAsyncThunk<Article[], { replace?: boolean } | void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, { extra, rejectWithValue, getState }) => {

    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());
    const type = getArticlesPageType(getState());

    const limit = getArticlesPageLimit(getState());

    try {
      addQueryParams({ sort, order, search, type });

      const response = await extra.api.get<Article[]>('/articles/', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type === ArticleType.ALL ? undefined : type
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
