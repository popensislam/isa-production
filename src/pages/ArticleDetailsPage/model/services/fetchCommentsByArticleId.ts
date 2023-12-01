import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment/model/types/comment';

export const fetchCommentsByArticleId = createAsyncThunk<CommentType[], string | undefined, ThunkConfig<string>>(
  'article/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {

    if (!articleId) {
      return rejectWithValue('Error');
    }

    try {
      const response = await extra.api.get<CommentType[]>('/comments/', { params: { articleId, _expand: 'user' } });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
