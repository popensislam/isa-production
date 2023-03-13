import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cls.PageLoader}>
      <Loader/>
    </div>
  );
};
