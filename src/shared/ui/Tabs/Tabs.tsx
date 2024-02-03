import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export interface TabItem<T> {
  value: T;
  content: ReactNode
}

interface TabsProps<T> {
    className?: string
    tabs: TabItem<T>[]
    value: T
    onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>({ tabs, value, onTabClick, className }: TabsProps<T>) => {

  const clickHandle = useCallback((tab: TabItem<T>) => {
    return () => {
      onTabClick(tab);
    };
  }, [ onTabClick ]);

  return (
    <div className={classNames(cls.tabs, {}, [ className ])}>
      {tabs.map((tab) => (
        <Card
          onClick={clickHandle(tab)}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
