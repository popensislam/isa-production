import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData';
import { CommentType } from 'entities/Comment/model/types/comment';
import { getUserAuthData } from 'entities/User';
import { addCommentFormActions } from 'features/AddCommentForm/model/slice/addCommentFormSlice';

export const sendCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
  'addCommentForm/addCommentForArticle',
  async (text, { extra, dispatch, rejectWithValue, getState }) => {
    try {

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());


      if (!text && !userData && !article) {
        return rejectWithValue('error');
      }

      const response = await extra.api.post<CommentType>('/comments', {
        articleId: article?.id,
        userId: userData?.id,
        text
      });


      dispatch(addCommentFormActions.setText(''));
      dispatch(fetchCommentsByArticleId(article?.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
