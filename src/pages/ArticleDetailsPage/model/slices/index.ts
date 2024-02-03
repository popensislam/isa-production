import { articleDetailsRecommendationReducer } from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';
import { combineReducers } from '@reduxjs/toolkit';


export const articleDetailsPageReducers = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsRecommendationReducer,
  comments: articleDetailsCommentsReducer
});
