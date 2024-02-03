import cls from './CommentCard.module.scss';
import { CommentType } from '../../model/types/comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
  className?: string
  comment?: CommentType
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { comment, isLoading, className } = props;


  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [ className, cls.isLoading ])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={'50%'}/>
          <Skeleton width={100} height={20} className={cls.username}/>
        </div>
        <Skeleton height={50} className={cls.text}/>
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div className={classNames(cls.commentCard, {}, [ className ])}>
      <AppLink to={RoutePath.profile + comment?.user.id} className={cls.header}>
        {comment?.user?.avatar && (
          <Avatar size={30} src={comment.user.avatar}/>
        )}
        {comment?.user?.username && (
          <Text className={cls.username} title={comment?.user.username}/>
        )}
      </AppLink>
      <Text className={cls.text} text={comment?.text}/>
    </div>
  );
};
