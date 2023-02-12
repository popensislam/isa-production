import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

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
