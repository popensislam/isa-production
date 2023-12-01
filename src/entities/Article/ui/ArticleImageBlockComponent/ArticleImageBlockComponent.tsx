import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import type { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ block }: ArticleImageBlockComponentProps) => {
  return (
    <div>
      <img src={block.src} alt={block.title} className={cls.img}/>
      {block.title && (
        <Text text={block.title} align={'center'}/>
      )}
    </div>
  );
});
