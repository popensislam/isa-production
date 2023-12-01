import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ block }: ArticleCodeBlockComponentProps) => {
  return (
    <Code className={cls.articleCode} text={block.code}/>
  );
});
