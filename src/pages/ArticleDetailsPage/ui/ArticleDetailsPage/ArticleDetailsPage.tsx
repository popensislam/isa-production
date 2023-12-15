import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comment';
import { useInitEffect } from 'shared/lib/hooks/useInitEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { sendCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle';


const reducerList: ReducerList = { articleDetailsComments: articleDetailsCommentsReducer };

const ArticleDetailsPage = ({ storybookId }: { storybookId?: string }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article_details');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(sendCommentForArticle(text));
  }, [ dispatch ]);

  useInitEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id && !storybookId) {
    return (
      <div>
        {t('there is no article id')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducerList} removeAfterUnmount>
      <div>
        <ArticleDetails id={id || storybookId || ''}/>
        <Text title={t('this is comments')} className={cls.commentTitle}/>
        <AddCommentForm onSendComment={onSendComment}/>
        <CommentList isLoading={commentsIsLoading} comments={comments}/>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
