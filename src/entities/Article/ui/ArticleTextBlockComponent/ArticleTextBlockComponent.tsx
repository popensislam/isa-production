import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import type { ArticleTextBlock } from '../../model/types/article';


interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {

  const { block } = props;

  return (
    <div>
      {block.title && (
        <Text title={block.title} className={cls.title}/>
      )}

      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph}/>
      ))}
    </div>
  );
});
