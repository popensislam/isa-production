import { ArticleDetailsPageRecommendationsSchema } from '../types/ArticleDetailsPageRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations';
import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';


const articleRecommendationsAdapter = createEntityAdapter<Article>({ selectId: (comment) => comment.id, });

export const getArticleRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>((state) => state.articleDetailsPage?.recommendations || articleRecommendationsAdapter.getInitialState());

export const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleRecommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        articleRecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false,
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsRecommendationActions } = articleDetailsPageRecommendationsSlice;
export const { reducer: articleDetailsRecommendationReducer } = articleDetailsPageRecommendationsSlice;
