import { getAddCommentFormText } from '../selectors/AddCommentFormSelectors';
import { addCommentFormActions } from '../slice/addCommentFormSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetailsData';
import { CommentType } from 'entities/Comment/model/types/comment';
import { getUserAuthData } from 'entities/User';

export const sendComment = createAsyncThunk<CommentType, void, ThunkConfig<string>>(
  'addCommentForm/sendComment',
  async (_, { extra, dispatch, rejectWithValue, getState }) => {
    try {

      const userData = getUserAuthData(getState());
      const text = getAddCommentFormText(getState());
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

      return response.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
