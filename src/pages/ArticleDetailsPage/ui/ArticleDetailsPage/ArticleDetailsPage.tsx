import cls from './ArticleDetailsPage.module.scss';
import { Suspense, memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
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
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';


const reducerList: ReducerList = { articleDetailsComments: articleDetailsCommentsReducer };

const ArticleDetailsPage = ({ storybookId }: { storybookId?: string }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article_details');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [ navigate ]);

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
      <Page>
        <div>
          <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
            {t('article_details.back')}
          </Button>
          <ArticleDetails id={id || storybookId || ''}/>
          <Text title={t('this is comments')} className={cls.commentTitle}/>
          <Suspense fallback=''>
            <AddCommentForm onSendComment={onSendComment}/>
          </Suspense>
          <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
