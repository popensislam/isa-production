import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentType } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface CommentListProps {
  className?: string
  comments?: CommentType[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { comments, className, isLoading } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [ className ])}>
      {!!comments?.length
        ? comments.map((comment) => <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment}/>)
        : <Text text={t('there is no comments')}/>
      }
    </div>
  );
};
