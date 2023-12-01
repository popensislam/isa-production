import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';

import CopyIcon from 'shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string
  text: string
}

export const Code = ({ text, className }: CodeProps) => {

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [ text ]);

  return (
    <pre className={classNames(cls.code, {}, [ className ])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ThemeButton.CLEAR}>
        <Icon Svg={CopyIcon}/>
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};
