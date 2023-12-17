import cls from './ArticleListItem.module.scss';
import { ArticleListView } from '../../model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemProps {
  view?: ArticleListView
}

export const ArticleListItemSkeleton = (props: ArticleListItemProps) => {

  const { view = ArticleListView.SMALL } = props;


  if (view === ArticleListView.BIG) {


    return (
      <div className={classNames(cls.BIG, {}, [])}>
        <Card>
          <div className={cls.header}>
            <Skeleton border='50%' width={30} height={30}/>
            <Skeleton width={150} height={16}/>
            <Skeleton width={150} height={16}/>
          </div>

          <Skeleton width={250} height={24} className={cls.title}/>
          <Skeleton width={150} height={16}/>

          <Skeleton width={'100%'} height={200} className={cls.img}/>

          <div className={cls.footer}>
            <Skeleton height={36} width={200}/>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.SMALL, {}, [])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200}/>
        </div>

        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16}/>
        </div>

        <Skeleton width={150} height={16}/>
      </Card>
    </div>
  );
};
