import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';


export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, { getState, dispatch }) => {

    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initView());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);
