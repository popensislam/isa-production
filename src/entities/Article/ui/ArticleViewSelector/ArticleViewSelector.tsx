import cls from './ArticleViewSelector.module.scss';
import { ArticleListView } from 'entities/Article/model/types/article';
import { memo } from 'react';
import FlexIcon from 'shared/assets/icons/flex.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleListView
    onViewClick?: (view: ArticleListView) => void
}

const viewTypes = [
  { view: ArticleListView.SMALL, Icon: FlexIcon }, { view: ArticleListView.BIG, Icon: ListIcon }
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {

  const onClick = (viewElm: ArticleListView) => () => onViewClick?.(viewElm);

  return (
    <div className={cls.list}>
      {viewTypes.map((viewItem) => (
        <Button
          theme={ThemeButton.CLEAR}
          key={viewItem.view}
          onClick={onClick(viewItem.view)}
          className={classNames('', { [ cls.notSelected ]: viewItem.view !== view }, [])}
        >
          <Icon Svg={viewItem.Icon}/>
        </Button>
      ))}
    </div>
  );
});
