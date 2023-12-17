import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleListView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import type { PayloadAction } from '@reduxjs/toolkit';


const articlesAdapter = createEntityAdapter<Article>({ selectId: (article) => article.id, });

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState());

export const articlesPageSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleListView.SMALL,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initView: (state) => {
      const viewFromLocalStore = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleListView;
      if (viewFromLocalStore) state.view = viewFromLocalStore;
      state.limit = viewFromLocalStore === ArticleListView.BIG ? 4 : 9;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        if (action.payload) {
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = Boolean(action.payload.length === state.limit);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false,
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
