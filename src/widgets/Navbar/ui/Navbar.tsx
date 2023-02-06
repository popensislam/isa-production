
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return ( 
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.PRIMARY} className={cls.mainLink}>Main page</AppLink>
                <AppLink to={'about'} theme={AppLinkTheme.PRIMARY}>About page</AppLink>
            </div>
        </div>
    );
}
