import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleListView, ArticleSortField } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';
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

    _inited: false,

    type: ArticleType.ALL,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
  }),
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    // Filters
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },

    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initView: (state) => {
      const viewFromLocalStore = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleListView;
      if (viewFromLocalStore) state.view = viewFromLocalStore;
      state.limit = viewFromLocalStore === ArticleListView.BIG ? 4 : 9;
      state._inited = true;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg && action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.hasMore = Boolean(action.payload.length === state.limit);
        }

        if (action.meta.arg && action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
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
