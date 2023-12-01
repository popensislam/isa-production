import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment/model/types/comment';
import { StateSchema } from 'app/providers/StoreProvider';
import type { PayloadAction } from '@reduxjs/toolkit';


const commentsAdapter = createEntityAdapter<CommentType>({ selectId: (comment) => comment.id, });

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => state.articleDetailsComments || commentsAdapter.getInitialState());

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [ '1', '2' ],
    entities: {
      '1': {
        id: '1',
        text: 'Comment 1',
        user: { id: '1', username: 'User' }
      },
      '2': {
        id: '2',
        text: 'Comment 2',
        user: { id: '2', username: 'Admin' }
      }
    }
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false,
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
